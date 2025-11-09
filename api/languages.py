import json

def handler(request):
    languages = [
        {"id": 1, "name": "Python"},
        {"id": 2, "name": "JavaScript"},
        {"id": 3, "name": "Java"},
        {"id": 4, "name": "C#"},
        {"id": 5, "name": "C++"},
    ]
    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        "body": json.dumps(languages)
    }

