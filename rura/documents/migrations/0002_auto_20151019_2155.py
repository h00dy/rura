# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('documents', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='agreement',
            name='agr_date',
            field=models.DateTimeField(null=True, verbose_name=b'Data umowy', blank=True),
        ),
        migrations.AlterField(
            model_name='agreement',
            name='agr_side',
            field=models.ForeignKey(on_delete=django.db.models.deletion.SET_NULL, blank=True, to='documents.AgreementSide', null=True),
        ),
        migrations.AlterField(
            model_name='agreement',
            name='agr_subject',
            field=models.TextField(verbose_name=b'Przedmiot umowy', blank=True),
        ),
        migrations.AlterField(
            model_name='agreement',
            name='received_date',
            field=models.DateTimeField(null=True, verbose_name=b'Data wp\xc5\x82ywu', blank=True),
        ),
        migrations.AlterField(
            model_name='invoice',
            name='brutto',
            field=models.FloatField(null=True, verbose_name=b'Kwota brutto', blank=True),
        ),
        migrations.AlterField(
            model_name='invoice',
            name='contractor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.SET_NULL, blank=True, to='documents.Contractor', null=True),
        ),
        migrations.AlterField(
            model_name='invoice',
            name='delivered',
            field=models.ForeignKey(on_delete=django.db.models.deletion.SET_NULL, blank=True, to='documents.Delivered', null=True),
        ),
        migrations.AlterField(
            model_name='invoice',
            name='netto',
            field=models.FloatField(null=True, verbose_name=b'Kwota netto', blank=True),
        ),
        migrations.AlterField(
            model_name='invoice',
            name='payment_date',
            field=models.DateTimeField(null=True, verbose_name=b'Termin p\xc5\x82atno\xc5\x9bci', blank=True),
        ),
        migrations.AlterField(
            model_name='invoice',
            name='received_date',
            field=models.DateTimeField(null=True, verbose_name=b'Data wp\xc5\x82ywu', blank=True),
        ),
        migrations.AlterField(
            model_name='invoice',
            name='responsible',
            field=models.ForeignKey(on_delete=django.db.models.deletion.SET_NULL, blank=True, to='documents.InvoiceResponsible', null=True),
        ),
        migrations.AlterField(
            model_name='invoice',
            name='tax',
            field=models.ForeignKey(on_delete=django.db.models.deletion.SET_NULL, blank=True, to='documents.Tax', null=True),
        ),
        migrations.AlterField(
            model_name='other',
            name='description',
            field=models.TextField(verbose_name=b'Opis dokumentu', blank=True),
        ),
        migrations.AlterField(
            model_name='other',
            name='received_date',
            field=models.DateTimeField(null=True, verbose_name=b'Data wp\xc5\x82ywu', blank=True),
        ),
        migrations.AlterField(
            model_name='other',
            name='responsible',
            field=models.ForeignKey(on_delete=django.db.models.deletion.SET_NULL, blank=True, to='documents.OtherResponsible', null=True),
        ),
        migrations.AlterField(
            model_name='other',
            name='sender',
            field=models.ForeignKey(on_delete=django.db.models.deletion.SET_NULL, blank=True, to='documents.Sender', null=True),
        ),
    ]
