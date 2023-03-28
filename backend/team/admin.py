from django.contrib import admin
from team.models import Team
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
# Register your models here.

# class TeamAdmin():

#     # The fields to be used in displaying the User model.
#     # These override the definitions on the base UserAdmin
#     # that reference specific fields on auth.User.
#     list_display = ('name', 'por', 'year')
#     list_filter = ('year',)
#     fieldsets = (
#         ('User Credentials', {'fields': ('image', 'name')}),
#         ('Personal info', {'fields': ('name',)}),
#     )
#     # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
#     # overrides get_fieldsets to use this attribute when creating a user.
#     # add_fieldsets = (
#     #     (None, {
#     #         'classes': ('wide',),
#     #         'fields': ('email', 'name', 'password1', 'password2'),
#     #     }),
#     # )
#     search_fields = ('email',)
#     ordering = ('email', 'year')
#     filter_horizontal = ()

# admin.site.register(Team, TeamAdmin)

# # Register your models here.


