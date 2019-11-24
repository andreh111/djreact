from .views import ArticleViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('',ArticleViewSet,base_name='articles')
urlpatterns = router.urls
