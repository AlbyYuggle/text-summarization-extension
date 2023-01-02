from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from . import model
from . import tokenizer
import json
import math

# Create your views here.

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")
@csrf_exempt
def summarize(request):
    if request.method == "POST":
        data = request.body
        print(type(data))
        text = json.loads(data)['text']
        out = ""
        
        
        # Generate Summary
        for i in range(0, len(text), 1024):
            inputs = tokenizer(text[i:min(i+1024, len(text))], max_length=1024, return_tensors="pt")
            summary_ids = model.generate(inputs["input_ids"])
            out += " "
            out += tokenizer.batch_decode(summary_ids, skip_special_tokens=True, clean_up_tokenization_spaces=False)[0]
        response = JsonResponse({'text': out})
        return response
    return None