from django.views.decorators.csrf import csrf_exempt # Adicione este import
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from .models import Funcionario
import json

# 1. LISTAR FUNCIONÁRIOS
def lista_funcionarios(request):
    funcionarios = Funcionario.objects.all()
    # Certifique-se de que o caminho 'colaboradores/tabela.html' está correto no seu projeto
    return render(request, 'colaboradores/tabela.html', {'funcionarios': funcionarios})

# 2. ADICIONAR FUNCIONÁRIO (AJAX)
@csrf_exempt
@require_POST
def adicionar_funcionario(request):
 
     try:
        data = json.loads(request.body)
        novo_funcionario = Funcionario.objects.create(
            nome=data.get('nome'),
            cargo=data.get('cargo'),
            email=data.get('email')
        )
        return JsonResponse({
            'status': 'sucesso',
            'id': novo_funcionario.id
        })
     except Exception as e:
        return JsonResponse({'status': 'erro', 'message': str(e)}, status=400)

# 3. EDITAR FUNCIONÁRIO (AJAX)
@require_POST
def editar_funcionario(request, id):
    try:
        data = json.loads(request.body)
        funcionario = get_object_or_404(Funcionario, id=id)
        
        funcionario.nome = data.get('nome')
        funcionario.cargo = data.get('cargo')
        funcionario.email = data.get('email')
        funcionario.save()
        
        return JsonResponse({'status': 'sucesso'})
    except Exception as e:
        return JsonResponse({'status': 'erro', 'message': str(e)}, status=400)

# 4. DELETAR FUNCIONÁRIO (AJAX)
@require_POST
def deletar_funcionario(request, id):
    funcionario = get_object_or_404(Funcionario, id=id)
    funcionario.delete()
    return JsonResponse({'status': 'sucesso'})