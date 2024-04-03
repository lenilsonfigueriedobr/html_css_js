Aula 26 - Prática guiada 1:

- Apague as classes dos estilos dinâmicos do arquivo HTML (correct, error, visible e required-popup)

- adicione um `eventListener` ao `usernameInput`, passando como primeiro argumento o evento "focus" e como segundo argumento uma função que adicione a classe `required-popup` ao `usenameLabel`

- adicione outro `eventListener` ao mesmo elemento, dessa vez com o evento "blur" e removendo a classe "required-popup"

Aula 26 - Prática guiada 2: adicione um eventListener ao usernameInput, passando como primeiro argumento o evento "change" e como segundo argumento uma função com um parâmetro "evento". Essa função deve:

imprimir no console o valor da propriedade evento.target.value
verificar o valor do input possui no mínimo 3 caracteres, imprimindo mensagens diferentes para cada caso
adicionar ou remover as classes dinâmicas apropriadas nos elementos usernameInput e usernameHelper

Aula 26 - Prática guiada 3:

crie variáveis para manipular os elementos label, input e .helper-text do campo email

adicione listeners para os eventos de focus, blur e change do input de email. O endereço de email será considerado válido se contiver @ e .com

Desafio: refatore as funções de exibir/ocultar o popup para que elas possam ser reaproveitadas para o input de email