from django.contrib import admin
from documents.models import (Contractor, Firm, InvoiceResponsible,
                             OtherResponsible, Delivered, AgreementSide,
                             Sender, Tax)


class FirmAdmin(admin.ModelAdmin):
    pass

class DeliveredAdmin(admin.ModelAdmin):
    pass

class AgreementSideAdmin(admin.ModelAdmin):
    pass

class SenderAdmin(admin.ModelAdmin):
    pass

class TaxAdmin(admin.ModelAdmin):
    pass

class ContractorAdmin(admin.ModelAdmin):
    pass

class InvoiceResponsibleAdmin(admin.ModelAdmin):
    pass

class OtherResponsibleAdmin(admin.ModelAdmin):
    pass

admin.site.register(Firm, FirmAdmin)
admin.site.register(Delivered, DeliveredAdmin)
admin.site.register(AgreementSide, AgreementSideAdmin)
admin.site.register(Sender, SenderAdmin)
admin.site.register(Tax, TaxAdmin)
admin.site.register(Contractor, ContractorAdmin)
admin.site.register(InvoiceResponsible, InvoiceResponsibleAdmin)
admin.site.register(OtherResponsible, OtherResponsibleAdmin)

# Register your models here.
