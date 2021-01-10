# diceBag
Api de rolagem de dados de RPG, futuramente fará parte de um assistente de montagem de ficha de DnD 5e.

# Documentação
Uma api simples que recebe expressões de rolagem por requisições em json. Abaixo alguns exemplos:
-Requisição(Rolagem)                                               
{
	"value":"1d20"
}
-Resposta
{
  "resp": {
    "expression": "1d20",
    "results": [
      {
        "expression": "1d20",
        "results": [
          18
        ],
        "result": 18
      }
    ],
    "index": [],
    "result": 18
  }
}

-Requisição(Rolagem com Vantagem)
{
	"value":"1d*20"
}
-Resposta
{
  "resp": {
    "expression": "1d*20",
    "results": [
      {
        "expression": "1d*20",
        "results": [
          2,
          6
        ],
        "result": 6
      }
    ],
    "result": 6
  }
}

-Requisição(Rolagem com Desvantagem)
{
	"value":"1d'20"
}
-Resposta
{
  "resp": {
    "expression": "1d'20",
    "results": [
      {
        "expression": "1d'20",
        "results": [
          11,
          9
        ],
        "result": 9
      }
    ],
    "result": 9
  }
}

-Requisição(Rolagem com Operação Matemática)
{
	"value":"1d10+6-1"
}
-Resposta
{
  "resp": {
    "expression": "1d10+6-1",
    "results": [
      {
        "expression": "1d10",
        "results": [
          10
        ],
        "result": 10
      },
      {
        "expression": "6",
        "results": [
          6
        ],
        "result": 6
      },
      {
        "expression": "1",
        "results": [
          1
        ],
        "result": 1
      }
    ],
    "result": 15
  }
}
