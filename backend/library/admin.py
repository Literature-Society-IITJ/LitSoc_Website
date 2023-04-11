from django.contrib import admin
from library.models import Book
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
# Register your models here.

class BookAdmin(BaseUserAdmin):

    # The fields to be used in displaying the User model.
    # These override the definitions on the base UserAdmin
    # that reference specific fields on auth.User.

    list_display = ('name', 'isbn', 'book_id', 'author', 'category')
    list_filter = ('category',)
    fieldsets = (
        ('User Credentials', {'fields': ('book_id', 'name')}),
        ('Personal info', {'fields': ('isbn',)}),
    )
    # add_fieldsets is not a standard ModelAdmin attribute. UserAdmin
    # overrides get_fieldsets to use this attribute when creating a user.
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('name', 'isbn', 'book_id', 'author', 'category'),
        }),
    )
    search_fields = ('book_id',)
    ordering = ('name', 'category')
    filter_horizontal = ()

admin.site.register(Book, BookAdmin)

