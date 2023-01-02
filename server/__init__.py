from transformers import PegasusTokenizer, PegasusForConditionalGeneration

print("loading models.............")
model = PegasusForConditionalGeneration.from_pretrained("google/pegasus-xsum")
tokenizer = PegasusTokenizer.from_pretrained("google/pegasus-xsum")
