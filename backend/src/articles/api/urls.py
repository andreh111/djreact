from django.urls import path,include
from .views import ArticlesDetailView,ArticlesListView

urlpatterns = [
    path('',ArticlesListView.as_view()),
    path('<pk>',ArticlesDetailView.as_view())
]
