from django.contrib import admin
from django.urls import path
from colaboradores.views import lista_funcionarios, editar_funcionario
from colaboradores.views import lista_funcionarios, editar_funcionario, deletar_funcionario, adicionar_funcionario

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', lista_funcionarios, name='lista'),
    path('editar/<int:id>/', editar_funcionario, name='editar_funcionario'),
    path('deletar/<int:id>/', deletar_funcionario, name='deletar_funcionario'), # Nova rota
    path('adicionar/', adicionar_funcionario, name='adicionar_funcionario'),
]