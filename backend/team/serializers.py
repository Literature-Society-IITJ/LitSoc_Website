from rest_framework import fields, serializers
from team.models import Team

class TeamViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['name', 'por', 'year', 'linkedin','instagram', 'description']

class TeamUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['name', 'por', 'year', 'linkedin','instagram', 'description']

    def create(self, validate_data):
        # email = validate_data.get('email')
        # user_name = validate_data.get('user_name')
        # password = validate_data.get('password')

        return Team.objects.create(**validate_data)