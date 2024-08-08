from django.urls import path
from . import views
from .views import FileUploadView

urlpatterns = [
    path('applicantdetails/', views.UpdateApplicantDetails.as_view(), name="details-list"),
    path('applicantdetails/delete/', views.DeleteApplicantDetails.as_view(), name="details-delete"),
    path('upload/', FileUploadView.as_view(), name='file-upload')
]