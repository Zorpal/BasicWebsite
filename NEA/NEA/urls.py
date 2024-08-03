from applicants.views import CreateApplicantView
from django.contrib import admin
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/register/', CreateApplicantView.as_view(), name="register"),
    path('api/token/', TokenObtainPairView.as_view(), name='get_token'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='refresh'),
    path('api-auth/', include("rest_framework.urls")),
    path('api/', include('applicants.urls')),
]
