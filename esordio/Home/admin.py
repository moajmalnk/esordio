from django.contrib import admin

from .models import Projectimage,ContactMessage

# Register your models here.

admin.site.register(Projectimage)

class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'phonenumber', 'email', 'message')
    readonly_fields = ('name', 'phonenumber', 'email', 'message')

admin.site.register(ContactMessage, ContactMessageAdmin)
