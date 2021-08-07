from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()

router.register('filters', views.FilterViewset)
router.register('categories', views.CategoryViewset)
router.register('vote', views.VoteViewSet)

urlpatterns = router.urls
