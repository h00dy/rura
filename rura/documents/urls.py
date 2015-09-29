from django.conf.urls import url, include
from .views import (FirmViewSet, ContractorViewSet, InvoiceResponsibleViewSet,
                    OtherResponsibleViewSet, DeliveredViewSet,
                    AgreementSideViewSet, SenderViewSet, InvoiceViewSet,
                    AgreementViewSet, OtherViewSet, TaxViewSet)
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'firms', FirmViewSet)
router.register(r'taxes', TaxViewSet)
router.register(r'contractors', ContractorViewSet)
router.register(r'invoiceResponsibles', InvoiceResponsibleViewSet)
router.register(r'otherResponsibles', OtherResponsibleViewSet)
router.register(r'delivered', DeliveredViewSet)
router.register(r'agreementSides', AgreementSideViewSet)
router.register(r'senders', SenderViewSet)
router.register(r'invoices', InvoiceViewSet)
router.register(r'agreements', AgreementViewSet)
router.register(r'other', OtherViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls',
                               namespace='rest_framework'))

]
