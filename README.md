# CrisisHotlines

A JSON API to help people around the world for quickly seeking help at a crisis.

The API follows this syntax:
```json
[
  {
    "country": "<country_name>",
    "alpha-2": "<alpha-2_code>",
    "alpha-3": "<alpha-3_code>",
    "hotlines": [
      {
        "name": "<organization_name>",
        "numbers": [
          "<number_1>",
          "<number_2>"
        ]
      }
    ]
  },
  ----------- repeating for every country -----------
]
```

<hr>


### Included Countries:

<details>
  <summary>Collapse</summary>
  <br>

- [x] Afghanistan
- [x] Albania
- [x] Algeria
- [x] Andorra
- [x] Angola
- [x] Antigua and Barbuda
- [x] Argentina
- [x] Armenia
- [x] Australia
- [x] Austria
- [x] Azerbaijan
- [x] Bahamas
- [x] Bahrain
- [x] Bangladesh
- [x] Barbados
- [x] Belarus
- [x] Belgium
- [x] Belize
- [x] Benin
- [x] Bhutan
- [x] Bolivia
- [x] Bosnia and Herzegovina
- [x] Botswana
- [x] Brazil
- [x] Brunei
- [x] Bulgaria
- [x] Burkina Faso
- [x] Burundi
- [x] Cabo Verde (Cape Verde)
- [x] Cambodia
- [x] Cameroon
- [x] Canada
- [x] Caymon Islands
- [x] Central African Republic
- [x] Chad
- [x] Chile
- [x] China
- [x] Colombia
- [x] Comoros
- [x] Cook Islands
- [x] Costa Rica
- [x] Croatia
- [x] Cuba
- [x] Curaçao
- [x] Cyprus
- [x] Czech Republic
- [x] Democratic Republic of the Congo
- [x] Denmark
- [x] Djibouti
- [x] Dominica
- [x] Dominican Republic
- [x] East Timor
- [x] Ecuador
- [x] Egypt
- [x] El Salvador
- [x] Equatorial Guinea
- [x] Eritrea
- [x] Estonia
- [x] Eswatini
- [x] Ethiopia
- [x] Federated States of Micronesia
- [x] Fiji
- [x] Finland
- [x] France
- [x] Gabon
- [x] Gambia
- [x] Georgia
- [x] Germany
- [x] Ghana
- [x] Gibraltar
- [x] Greece
- [x] Greenland
- [x] Grenada
- [x] Guatemala
- [x] Guinea
- [x] Guinea-Bissau
- [x] Guernsey
- [x] Guyana
- [x] Haiti
- [x] Honduras
- [x] Hong Kong
- [x] Hungary
- [x] Iceland
- [x] India
- [x] Indonesia
- [x] Iran
- [x] Iraq
- [x] Ireland
- [x] Israel
- [x] Italy
- [x] Ivory Coast
- [x] Jamaica
- [x] Japan
- [x] Jordan
- [x] Kazakhstan
- [x] Kenya
- [x] Kiribati
- [x] Kosovo
- [x] Kuwait
- [x] Kyrgyzstan
- [x] Laos
- [x] Latvia
- [x] Lebanon
- [x] Lesotho
- [x] Liberia
- [x] Libya
- [x] Liechtenstein
- [x] Lithuania
- [x] Luxembourg
- [x] Madagascar
- [x] Malawi
- [x] Malaysia
- [x] Maldives
- [x] Mali
- [x] Malta
- [x] Marshall Islands
- [x] Mauritania
- [x] Mauritius
- [x] Mexico
- [x] Moldova
- [x] Monaco
- [x] Mongolia
- [x] Montenegro
- [x] Morocco
- [x] Mozambique
- [x] Myanmar
- [x] Namibia
- [x] Nauru
- [x] Nepal
- [x] Netherlands
- [x] New Zealand
- [x] Nicaragua
- [x] Niger
- [x] Nigeria
- [x] North Korea
- [x] North Macedonia
- [x] Norway
- [x] Oman
- [x] Pakistan
- [x] Palau
- [x] Palestine
- [x] Panama
- [x] Papua New Guinea
- [x] Paraguay
- [x] Peru
- [x] Philippines
- [x] Poland
- [x] Portugal
- [x] Qatar
- [x] Romania
- [x] Russia
- [x] Rwanda
- [x] Saint Kitts and Nevis
- [x] Saint Lucia
- [x] Saint Vincent and the Grenadines
- [x] Samoa
- [x] San Marino
- [x] Sao Tome and Principe
- [x] Saudi Arabia
- [x] Senegal
- [x] Serbia
- [x] Seychelles
- [x] Sierra Leone
- [x] Singapore
- [x] Slovakia
- [x] Slovenia
- [x] Solomon Islands
- [x] Somalia
- [x] South Africa
- [x] South Korea
- [x] South Sudan
- [x] Spain
- [x] Sri Lanka
- [x] Sudan
- [x] Suriname
- [x] Sweden
- [x] Switzerland
- [x] Syria
- [x] Taiwan
- [x] Tajikistan
- [x] Tanzania
- [x] Thailand
- [x] Togo
- [x] Tonga
- [x] Trinidad and Tobago
- [x] Tunisia
- [x] Turkey
- [x] Turkmenistan
- [x] Tuvalu
- [x] Uganda
- [x] Ukraine
- [x] United Arab Emirates
- [x] United Kingdom
- [x] United States
- [x] Uruguay
- [x] Uzbekistan
- [x] Vanuatu
- [x] Venezuela
- [x] Vietnam
- [x] Yemen
- [x] Zambia
- [x] Zimbabwe

</details>

<hr>


### Usage:

There are two versions of the API:

- General API:<br>
https://cdn.jsdelivr.net/gh/sandunwira/CrisisHotlines/information.json

- Minified Version API:<br>
https://cdn.jsdelivr.net/gh/sandunwira/CrisisHotlines/information.min.json

<hr>


### Contribute:

If you wish to contribute to this project, you can either create a new issue or create a fork and contribute

##### Contribute via issue:

Use this template when creating an issue to have a streamlined review:

```
What do you want to change or have issues about?:
<summary or description of the issue>

Sources for verification, if you want to add information to the project:
<sources for verifying the information>
```

##### Contribute via forks:

1. Create a fork:<br>
https://github.com/sandunwira/CrisisHotlines/fork

2. Clone your forked repository<br>

3. Make adjustments in `information.json` file (make sure to sync your fork with the base repository always, to avoid conflicts when merging PRs)

4. After making adjustments to your fork, commit the changes to your repository

5. Then create a pull request to the base repository from your repository:<br>
To avoid false information and to have a streamlined PR review, please make sure to use the following as a template for your pull request when creating:
```
What did you change?:
<summary or description of what you have changed>

Sources:
<sources for verifying the information>
```

<hr>


<div align="center">
  Thank you for your time ❤
</div>
