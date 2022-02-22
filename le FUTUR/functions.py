import csv

def import_csv_list(url_file, delimiter):
    with open(url_file, newline='', encoding='utf-8') as csvfile :
        file = csv.reader(csvfile, delimiter=delimiter)
        #Initialisation de la liste de liste
        list_list = []
        for row in file :
            list_list.append(row)
    return list_list

def import_csv_dict(url_file, delimiter):
    with open(url_file, newline='', encoding='utf-8') as csvfile :
        reader = csv.DictReader(csvfile, delimiter=delimiter)
        #Initialisation de la liste de dictionnaire
        liste_dict = []
        for row in reader :
            liste_dict.append(row)
    return liste_dict
