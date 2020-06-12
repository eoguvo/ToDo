# ✅ **`ToDos project`** ✅
>*Organize suas tarefas de maneira rápida, numa interface minimalista*

### ⭐`SOBRE O PROJETO`⭐
Lista suas tarefas, objetivos, metas, **o que voce quiser**, tem uma interface intuitiva e minimalista

# * 。 • ˚ ˚ ˛ ˚ ˛ • 。* 。° 。* 。 • ˚* 。 • ˚ ˚ ˛ ˚ ˛ • 。* 。° 。* 。 • ˚
### 📷`PROJETO`📷
>Input on focus
![alt](images/focus.jpeg)
 ----
>Checked
![alt](images/check.jpeg)
----
>Responsive
![alt](images/responsive.jpeg)
# * 。 • ˚ ˚ ˛ ˚ ˛ • 。* 。° 。* 。 • ˚* 。 • ˚ ˚ ˛ ˚ ˛ • 。* 。° 。* 。 • ˚
# **💥`Save sem database`💥**
```javascript
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
 //tenta retornar itens do localStorage ou retorna um array vazio
 
[...]

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
} 
//armazena no localStorage
```