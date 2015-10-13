#! -*- coding=utf-8 -*-

from django.db import models


# Create your models here.
class Subject(models.Model):
    name = models.CharField(
        blank=False,
        unique=True,
        max_length=255,
        verbose_name="Nazwa"
    )

    def __unicode__(self):
        return self.name

    class Meta:
        abstract = True


class Firm(Subject):
    class Meta:
        verbose_name = "Firma"
        verbose_name_plural = "Firmy"


class Contractor(Subject):
    class Meta:
        verbose_name = "Kontrahent"
        verbose_name_plural = "Kontrahenci"


class InvoiceResponsible(Subject):
    class Meta:
        verbose_name = "Osoba odpowiedzialna (FV)"
        verbose_name_plural = "Osoby odpowiedzialne (FV)"


class OtherResponsible(Subject):
    class Meta:
        verbose_name = "Osoba odpowiedzialna (Inne)"
        verbose_name_plural = "Osoby odpowiedzialne (Inne)"


class Delivered(Subject):
    class Meta:
        verbose_name = "Przekazano"
        verbose_name_plural = "Przekazano"


class AgreementSide(Subject):
    class Meta:
        verbose_name = "Strona umowy"
        verbose_name_plural = "Strony umowy"


class Sender(Subject):
    class Meta:
        verbose_name = "Nadawca"
        verbose_name_plural = "Nadawcy"


class Document(models.Model):
    received_date = models.DateTimeField(
        blank=False,
        verbose_name="Data wpływu"
    )
    registry_nr = models.CharField(
        blank=False,
        unique=True,
        max_length=255,
        verbose_name="Nr w rejestrze"
    )
    scan = models.CharField(
        blank=False,
        unique=True,
        max_length=255,
        verbose_name="Skan"
    )
    notes = models.TextField(
        blank=True,
        verbose_name="Uwagi"
    )
    IN = "IN"
    OUT = "OUT"
    DOCUMENT_TYPE = (
        (IN, "Dokument przychodzący"),
        (OUT, "Dokument wychodzący")
    )
    document_type = models.CharField(
        choices=DOCUMENT_TYPE,
        max_length=20,
        default=IN,
        verbose_name="Typ dokumentu"
    )
    firm = models.ForeignKey('Firm')

    class Meta:
        abstract = True
        ordering = ['received_date']


class Tax(models.Model):
    value = models.SmallIntegerField("VAT", blank=False, unique=True)

    def __unicode__(self):
        return "VAT = {}%".format(self.value)

    class Meta:
        verbose_name = "Podatek VAT"
        verbose_name_plural = "Podatki VAT"


class Invoice(Document):
    contractor = models.ForeignKey('Contractor',
                                   blank=True,
                                   null=True,
                                   default=99999,
                                   on_delete=models.SET_NULL)
    netto = models.FloatField("Kwota netto", blank=True)
    brutto = models.FloatField("Kwota brutto", blank=True)
    tax = models.ForeignKey('Tax',
                            blank=True,
                            null=True,
                            on_delete=models.SET_NULL)
    responsible = models.ForeignKey('InvoiceResponsible',
                                    blank=True,
                                    null=True,
                                    on_delete=models.SET_NULL)
    paid = models.BooleanField("Zapłacono", default=False)
    payment_date = models.DateTimeField("Termin płatności",
                                        blank=True, null=True)
    delivered = models.ForeignKey('Delivered',
                                  blank=True,
                                  null=True,
                                  default=99999,
                                  on_delete=models.SET_NULL)


class Agreement(Document):
    agr_side = models.ForeignKey('AgreementSide',
                                 blank=True,
                                 null=True,
                                 on_delete=models.SET_NULL)
    agr_date = models.DateTimeField("Data umowy", blank=True)
    agr_subject = models.TextField("Przedmiot umowy", blank=True)


class Other(Document):
    sender = models.ForeignKey("Sender",
                               blank=True,
                               null=True,
                               on_delete=models.SET_NULL)
    description = models.TextField("Opis dokumentu", blank=True)
    responsible = models.ForeignKey('OtherResponsible',
                                    blank=True,
                                    null=True,
                                    on_delete=models.SET_NULL)
