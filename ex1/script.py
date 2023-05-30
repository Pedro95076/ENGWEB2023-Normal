input_file = "plantas_antes.json"
output_file = "plantas.json"

def process_plantas(data):
    for planta in data:
        if "Id" in planta:
            planta["_id"] = planta.pop("Id")
        for key, value in planta.items():
            if value == "":
                planta[key] = "SemInfo"
            elif isinstance(value, str):
                planta[key] = value.encode('utf-8').decode('utf-8')

with open(input_file, "r", encoding='utf-8') as file:
    plantas_data = json.load(file)

process_plantas(plantas_data)

with open(output_file, "w", encoding='utf-8') as file:
    json.dump(plantas_data, file, ensure_ascii=False)
