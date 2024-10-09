from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from .views import UserView, UserInfoView, CustomTokenObtainPairView, VerifyTokenView, UserRegisterView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# api versioning
router = routers.DefaultRouter()
router.register(r'users', UserView, 'Users')
urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title='Users API')),
    # path("auth/", AuthView.as_view(), name='auth'),
    path("userinfo/", UserInfoView.as_view(), name='user_info'),
    path('api/register/', UserRegisterView.as_view(), name='user_register'),  
    path('api/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', VerifyTokenView.as_view(), name='token_refresh'),

]