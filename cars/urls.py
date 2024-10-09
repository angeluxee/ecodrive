from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from .views import CarView, FilteredCarListView

# api versioning
router = routers.DefaultRouter()
router.register(r'cars', CarView, 'Cars')
urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("api/filter/", FilteredCarListView.as_view(), name='filtered-car-list'),
    path("docs/", include_docs_urls(title='Cars API'))
]