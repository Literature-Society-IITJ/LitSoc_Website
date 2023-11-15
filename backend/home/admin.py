from django.contrib import admin
from home.models import Member, EmailVerification
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin


class MemberAdmin(BaseUserAdmin):
    list_display = ('id', 'email', 'username', 'is_admin', 'image')
    list_filter = ('is_admin',)
    fieldsets = (
        ('User Credentials', {'fields': ('email', 'password')}),
        ('Personal info', {'fields': ('username',)}),
        ('Permissions', {'fields': ('is_admin',)}),
        ('Profile Image', {'fields': ('image',)})
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'phone', 'roll_number', 'first_name', 'last_name', 'password1', 'password2'),
        }),
    )
    search_fields = ('email',)
    ordering = ('email', 'id')
    filter_horizontal = ()

admin.site.register(Member, MemberAdmin)
admin.site.register(EmailVerification)
