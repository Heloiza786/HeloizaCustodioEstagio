# Test Driven Development (TDD)

Versão: 1.0  
Data de Criação: 16/06/2025  
Última Atualização: 16/06/2025

1\. Objetivo
------------

Este artigo pretende mostrar o básico relativo a testes de software durante o desenvolvimento. O foco desse documento será o teste de unidade (unity test), no entanto, outras formas de testes serão abordadas.
Para os exemplos aboradados, será utilizado códigos e ferramentas relativos a C#, no entanto, a parte conceitual aplica-se à qualquer linguagem de programação.

2\. Público-alvo
----------

Esta política aplica-se a todos os desenvolvedores da PSTG.

3\. Sobre o TDD
---------------------
### Pirâmide de testes
![Pirâmide de testes](./pyramid.jpg)

#### Testes Unitários (unit tests)
**O que são:**
São testes que verificam se cada parte isolada do código funciona corretamente — normalmente uma única função ou método.

**Analogia:**
É como testar apenas o motor do robô, fora do robô inteiro, para ver se ele gira quando você manda energia.

**Exemplo:**
Se você tem uma função que soma dois números, o teste unitário verifica se soma(2, 3) retorna 5.

**Objetivo:**
- Encontrar erros o mais cedo possível.

- Garantir que pequenas partes do sistema funcionem bem sozinhas.

#### Testes de Integração (integration tests)
**O que são:**
Testam se módulos diferentes do sistema funcionam bem juntos. Você não testa só o motor, mas o motor ligado ao braço.

**Analogia:**
É como testar se o motor do robô move corretamente o braço, ou se o sensor envia sinais para o controle.

**Exemplo:**
Verificar se, ao chamar uma função de "criar pedido", o pedido é salvo no banco de dados corretamente e o e-mail de confirmação é enviado.

**Objetivo:**
Verificar a comunicação entre partes do sistema.

Pegar problemas que não aparecem quando se testa cada módulo sozinho.

#### Testes End-to-End (E2E)
**O que são:**
Testam o sistema inteiro funcionando como um usuário final usaria, do começo ao fim.

**Analogia:**
É como ligar o robô e pedir que ele vá até a cozinha, pegue um copo e volte. Você está testando tudo: sensores, motores, software, energia, etc.

**Exemplo:**
Abrir o site, preencher o formulário de cadastro, clicar em “Enviar” e verificar se o usuário foi realmente cadastrado com sucesso.

**Objetivo:**
Simular o uso real da aplicação.

Garantir que tudo funciona junto como deveria.


### O que é TDD?

*   TDD, ou Test-Driven Development (Desenvolvimento Orientado a Testes), é uma metodologia de desenvolvimento de software onde os testes são escritos ANTES do código de produção.
*   É um ciclo de desenvolvimento curto e repetitivo que consiste em três fases principais: Red (testes falham), Green (é escrito o código que passa nos testes) e Refactor (código é refatorado para melhorar leitura, eficiência, lógica, etc.).

### Por que user o TDD?

A adoção do TDD traz uma série de benefícios que impactam diretamente a qualidade do código e a eficiência do desenvolvimento.

*   Maior Confiança no Código
*   Maior Confiança no Código
*   Redução de Bugs
*   Facilita a Refatoração
*   Design de Código Aprimorado
*   Documentação Viva
*   Melhora a Colaboração

### Principais Vantagens do TDD

O TDD oferece uma série de benefícios tangíveis que contribuem para um processo de desenvolvimento mais robusto e eficiente.

##### Qualidade de Código Superior
*   Testes automatizados garantem que o código funcione como esperado, reduzindo a incidência de bugs e facilitando a manutenção.
##### Design de Software Aprimorado
*   O TDD força um design mais modular e desacoplado, pois o código é escrito para ser testável, resultando em arquiteturas mais limpas.
##### Documentação Viva
*  Os testes servem como exemplos claros de como o código deve ser usado, atuando como uma documentação sempre atualizada e executável.
##### Facilita a Refatoração
*  Com uma suíte de testes robusta, a refatoração se torna mais segura, permitindo melhorias contínuas no código sem medo de quebrar funcionalidades existentes.
##### Redução de Custos a Longo Prazo
*  Embora o investimento inicial possa ser maior, o TDD reduz custos de manutenção e correção de bugs no futuro, economizando tempo e recursos.
##### Melhora a Colaboração da Equipe
*  Testes claros e um código bem projetado facilitam a compreensão e a colaboração entre os membros da equipe, acelerando o onboarding de novos desenvolvedores.

#### Boas Práticas do TDD

##### Mantenha os Testes Pequenos e Rápidos
*  Testes unitários devem executar rapidamente (< 100ms) e testar apenas uma funcionalidade específica por vez.
##### Siga o Padrão AAA
*  Organize seus testes em Arrange (preparar), Act (executar) e Assert (verificar) para maior clareza.
##### Refatore Constantemente
*  Após fazer o teste passar, sempre refatore o código para melhorar sua qualidade e legibilidade.
##### Escreva o Mínimo de Código
*  Implemente apenas o código necessário para fazer o teste passar, evitando over-engineering.
##### Use Nomenclatura Descritiva
*  Nomes de testes devem ser claros e expressar o comportamento esperado: Should_ReturnTrue_When_ValidInput
##### Evite Dependências Externas
*  Use mocks e stubs para isolar o código sob teste de dependências como banco de dados ou APIs.
##### Um Assert por Teste
*  Cada teste deve verificar apenas um comportamento específico para facilitar a identificação de falhas.
##### Execute Testes Frequentemente
*  Execute a suíte de testes após cada mudança para obter feedback imediato sobre o estado do código.

4\. TDD na Prática
---------------------

## TDD para desenvolvedores C#

Existem diversas bibliotecas para trabalhar com testes em C#. Nesse documento, trabalharemos com a XUnit

### Estrutura Necessária para xUnit
```bash
<PackageReference Include="xunit" Version="2.4.2" />
<PackageReference Include="xunit.runner.visualstudio" Version="2.4.5" />
<PackageReference Include="Microsoft.NET.Test.Sdk" Version="17.7.1" />
<PackageReference Include="Moq" Version="4.20.69" />
``` 

#### Recursos do xUnit
*  Atributos [Fact] e [Theory]
*  Fixtures para setup/teardown
*  Paralelização automática
*  Integração com .NET Core
*  Suporte a dependency injection

#### Estrutura Básica de Teste
```C#
[Fact]
public void Should_ReturnTrue_When_ValidInput()
{
    // Arrange
    var service = new MyService();
    
    // Act
    var result = service.Process("valid");
    
    // Assert
    Assert.True(result);
}
```
#### Ferramentas Complementares
*  Moq para mocking
*  FluentAssertions para assertions
*  AutoFixture para dados de teste
*  Bogus para dados fake
*  TestContainers para integração

### Exemplo de estrutura de diretórios para organizar os arquivos de testes;
```bash
MyCrudApi/
├── src/
│   ├── MyCrudApi.Domain/
│   │   ├── Entities/
│   │   ├── Interfaces/
│   │   └── Services/
│   ├── MyCrudApi.Infrastructure/
│   │   ├── Data/
│   │   ├── Repositories/
│   │   └── Configurations/
│   └── MyCrudApi.API/
│       ├── Controllers/
│       ├── DTOs/
│       └── Program.cs
├── tests/
│   ├── MyCrudApi.Domain.Tests/
│   │   ├── Entities/
│   │   └── Services/
│   ├── MyCrudApi.Infrastructure.Tests/
│   │   └── Repositories/
│   └── MyCrudApi.API.Tests/
│       ├── Controllers/
│       └── Integration/
└── MyCrudApi.sln
```
#### Separação em Diretórios:
Separação clara de responsabilidades, facilita testes e manutenção, seguindo Clean Architecture.
##### Domain
Contém as entidades de negócio, interfaces e regras de domínio. É o coração da aplicação.
##### Infrastructure
Implementa acesso a dados, repositórios e configurações de banco de dados.
##### API
Camada de apresentação com controllers, DTOs e configurações da API.
##### Tests
Espelha a estrutura do src/ com testes unitários e de integração para cada camada.

### Instalando os componentes

Na raiz do projeto (por exemplo, raiz do diretório app), rodar o comando
```bash

dotnet new xunit -n TddUserApi.Tests

``` 
Onde:   
 **“TddUserApi”** é como se fosse o nome da API que você está criando

Isso instalará a biblioteca xunit e gerará uma pasta chamada **TddUserApi.Tests**

Acesse essa pasta e rode o seguinte comando para referenciar o seu projeto de testes com o projeto principal:
```bash
dotnet add reference ../UsersApi
```

Rode o comando abaixo para instalar a biblioteca de Mock
```bash
dotnet add package Moq
``` 
No projeto UsersApi, crie o modelo User em Models/User.cs:
```c#
namespace UsersApi.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
    }
}
```

Crie IUserRepository em UsersApi/Repositories/IUserRepository.cs:
```c#
using UsersApi.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace UsersApi.Repositories
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> GetAllAsync();
        Task<User> GetByIdAsync(int id);
        Task<User> CreateAsync(User user);
        Task<User> UpdateAsync(User user);
        Task<bool> DeleteAsync(int id);
    }
}
``` 
Vamos implementar cada endpoint seguindo TDD, com exemplos de testes, mocks, e explicações detalhadas. Para cada endpoint, seguiremos o ciclo Red-Green-Refactor 

##### Passo 1: Escrever o Teste (Red)

###### Por que começar com o teste?
**Design First:** O teste define como queremos que nossa classe se comporte antes de implementá-la.
**Especificação Clara:** O teste serve como documentação executável do que o código deve fazer.
**Feedback Rápido:** Sabemos imediatamente quando nossa implementação está correta.

No projeto UsersApi.Tests, crie a pasta Controllers e adicione o arquivo UsersControllerTests.cs:
```c#
using Moq;
using UsersApi.Controllers;
using UsersApi.Models;
using UsersApi.Repositories;
using Xunit;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace UsersApi.Tests.Controllers
{
    public class UsersControllerTests
    {
        [Fact]
        public async Task GetAllAsync_ReturnsOkResult_WithListOfUsers()
        {
            // Arrange (Given)
            var mockRepo = new Mock<IUserRepository>();
            var users = new List<User>
            {
                new User { Id = 1, Name = "John Doe", Email = "john@example.com" },
                new User { Id = 2, Name = "Jane Doe", Email = "jane@example.com" }
            };
            mockRepo.Setup(repo => repo.GetAllAsync()).ReturnsAsync(users);
            var controller = new UsersController(mockRepo.Object);

            // Act (When)
            var result = await controller.GetAllAsync();

            // Assert (Then)
            var okResult = Assert.IsType<OkObjectResult>(result);
            var returnedUsers = Assert.IsAssignableFrom<IEnumerable<User>>(okResult.Value);
            Assert.Equal(2, returnedUsers.Count());
        }
    }
}
```

Na raiz do projeto de testes, rode o primeiro teste
```bash
dotnet test
``` 
caso queira um feedback mais detalhado, use o comando:
```bash
dotnet test --verbosity normal
``` 

O teste falhará (Red) porque o UsersController ainda não existe. Faremos isso no próximo passo logo abaixo.

#### Passo 2: Escrever o Código Mínimo (Green)
##### Princípios da Fase Green
**Código Mínimo:** Implemente apenas o necessário para fazer o teste passar, sem funcionalidades extras.

**Validações Essenciais:** Inclua apenas as validações que os testes exigem.

**Propriedades Imutáveis:** Use setters privados para manter a integridade dos dados.

**Construtor com Validação:** Garanta que o objeto seja criado em um estado válido.


Crie o controlador UsersController em “UsersApi/Controllers/UsersController.cs”:


```c#
using Microsoft.AspNetCore.Mvc;
using UsersApi.Models;
using UsersApi.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace UsersApi.Controllers
{
    [ApiController]
    [Route("users")]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            var users = await _userRepository.GetAllAsync();
            return Ok(users);
        }
    }
}
```


Execute novamente:
```bash
dotnet test
```

O teste agora deve passar (Green).
Passo 3: Refatorar (se necessário)
Neste caso, o código é simples e não requer refatoração imediata. Podemos prosseguir para o próximo endpoint.


Endpoint GET /users/{id} (Obter Usuário por ID)
Passo 1: Escrever o Teste (Red)
Adicione o teste ao UsersControllerTests.cs:

```c#
[Fact]
public async Task GetByIdAsync_ReturnsOkResult_WhenUserExists()
{
    // Arrange (Given)
    var mockRepo = new Mock<IUserRepository>();
    var user = new User { Id = 1, Name = "John Doe", Email = "john@example.com" };
    mockRepo.Setup(repo => repo.GetByIdAsync(1)).ReturnsAsync(user);
    var controller = new UsersController(mockRepo.Object);

    // Act (When)
    var result = await controller.GetByIdAsync(1);

    // Assert (Then)
    var okResult = Assert.IsType<OkObjectResult>(result);
    var returnedUser = Assert.IsType<User>(okResult.Value);
    Assert.Equal(1, returnedUser.Id);
}

[Fact]
public async Task GetByIdAsync_ReturnsNotFound_WhenUserDoesNotExist()
{
    // Arrange (Given)
    var mockRepo = new Mock<IUserRepository>();
    mockRepo.Setup(repo => repo.GetByIdAsync(1)).ReturnsAsync((User)null!);
    var controller = new UsersController(mockRepo.Object);

    // Act (When)
    var result = await controller.GetByIdAsync(1);

    // Assert (Then)
    Assert.IsType<NotFoundResult>(result);
}

```
Execute novamente:
```bash
dotnet test
```
Os testes falharão porque o método GetByIdAsync não existe.
Passo 2: Escrever o Código Mínimo (Green)
Adicione ao UsersController.cs:

```c#
[HttpGet("{id}")]
public async Task<IActionResult> GetByIdAsync(int id)
{
    var user = await _userRepository.GetByIdAsync(id);
    if (user == null)
        return NotFound();
    return Ok(user);
}

``` 
Execute novamente:
```bash
dotnet test
```
Os testes agora devem passar.
Passo 3: Refatorar
O código está limpo e não precisa de refatoração por enquanto.

Endpoint POST /users (Criar Usuário)
Passo 1: Escrever o Teste (Red)
Adicione ao UsersControllerTests.cs:

```c#
[Fact]
public async Task CreateAsync_ReturnsCreatedAtAction_WithNewUser()
{
    // Arrange (Given)
    var mockRepo = new Mock<IUserRepository>();
    var newUser = new User { Name = "John Doe", Email = "john@example.com" };
    var createdUser = new User { Id = 1, Name = "John Doe", Email = "john@example.com" };
    mockRepo.Setup(repo => repo.CreateAsync(It.IsAny<User>())).ReturnsAsync(createdUser);
    var controller = new UsersController(mockRepo.Object);

    // Act (When)
    var result = await controller.CreateAsync(newUser);

    // Assert (Then)
    var createdResult = Assert.IsType<CreatedAtActionResult>(result);
    Assert.Equal("GetByIdAsync", createdResult.ActionName);
    Assert.Equal(1, createdResult.RouteValues["id"]);
    var returnedUser = Assert.IsType<User>(createdResult.Value);
    Assert.Equal("John Doe", returnedUser.Name);
}
```

Execute novamente:
```bash
dotnet test
```
O teste falhará porque o método CreateAsync não existe.
Passo 2: Escrever o Código Mínimo (Green)
Adicione ao UsersController.cs:

```c#
[HttpPost]
public async Task<IActionResult> CreateAsync([FromBody] User user)
{
    var createdUser = await _userRepository.CreateAsync(user);
    return CreatedAtAction(nameof(GetByIdAsync), new { id = createdUser.Id }, createdUser);
}
``` 
Execute novamente:
```bash
dotnet test
```
O teste agora passa.


Passo 3: Refatorar
O código está claro, mas poderíamos adicionar validação de entrada (como ModelState.IsValid) se necessário. Por enquanto, deixamos como está.

Endpoint PUT /users/{id} (Atualizar Usuário)
Passo 1: Escrever o Teste (Red)

Adicione ao UsersControllerTests.cs:
```c#
[Fact]
public async Task UpdateAsync_ReturnsOk_WhenUserExists()
{
    // Arrange (Given)
    var mockRepo = new Mock<IUserRepository>();
    var updatedUser = new User { Id = 1, Name = "Updated John", Email = "john@example.com" };
    mockRepo.Setup(repo => repo.UpdateAsync(It.IsAny<User>())).ReturnsAsync(updatedUser);
    var controller = new UsersController(mockRepo.Object);

    // Act (When)
    var result = await controller.UpdateAsync(1, updatedUser);

    // Assert (Then)
    var okResult = Assert.IsType<OkObjectResult>(result);
    var returnedUser = Assert.IsType<User>(okResult.Value);
    Assert.Equal("Updated John", returnedUser.Name);
}

[Fact]
public async Task UpdateAsync_ReturnsNotFound_WhenUserDoesNotExist()
{
    // Arrange (Given)
    var mockRepo = new Mock<IUserRepository>();
    mockRepo.Setup(repo => repo.UpdateAsync(It.IsAny<User>())).ReturnsAsync((User)null);
    var controller = new UsersController(mockRepo.Object);

    // Act (When)
    var result = await controller.UpdateAsync(1, new User { Id = 1 });

    // Assert (Then)
    Assert.IsType<NotFoundResult>(result);
}
```
Execute novamente:
```bash
dotnet test
```
Os testes falharão porque o método UpdateAsync não existe.
Passo 2: Escrever o Código Mínimo (Green)
Adicione ao UsersController.cs:

```c#
[HttpPut("{id}")]
public async Task<IActionResult> UpdateAsync(int id, [FromBody] User user)
{
    if (id != user.Id)
        return BadRequest();
        
    var updatedUser = await _userRepository.UpdateAsync(user);
    if (updatedUser == null)
        return NotFound();
    return Ok(updatedUser);
}
``` 
Execute novamente:
```bash
dotnet test
```
Passo 3: Refatorar
O código está adequado, mas poderíamos adicionar mais validações (como verificar se o usuário é válido).


Endpoint DELETE /users/{id} (Deletar Usuário)

Passo 1: Escrever o Teste (Red)
Adicione ao UsersControllerTests.cs:

```c#
[Fact]
public async Task DeleteAsync_ReturnsNoContent_WhenUserExists()
{
    // Arrange (Given)
    var mockRepo = new Mock<IUserRepository>();
    mockRepo.Setup(repo => repo.DeleteAsync(1)).ReturnsAsync(true);
    var controller = new UsersController(mockRepo.Object);

    // Act (When)
    var result = await controller.DeleteAsync(1);

    // Assert (Then)
    Assert.IsType<NoContentResult>(result);
}

[Fact]
public async Task DeleteAsync_ReturnsNotFound_WhenUserDoesNotExist()
{
    // Arrange (Given)
    var mockRepo = new Mock<IUserRepository>();
    mockRepo.Setup(repo => repo.DeleteAsync(1)).ReturnsAsync(false);
    var controller = new UsersController(mockRepo.Object);

    // Act (When)
    var result = await controller.DeleteAsync(1);

    // Assert (Then)
    Assert.IsType<NotFoundResult>(result);
}
```

Execute novamente:
```bash
dotnet test
```
Os testes falharão porque o método DeleteAsync não existe.
Passo 2: Escrever o Código Mínimo (Green)
Adicione ao UsersController.cs:

```c#
[HttpDelete("{id}")]
public async Task<IActionResult> DeleteAsync(int id)
{
    var deleted = await _userRepository.DeleteAsync(id);
    if (!deleted)
        return NotFound();
    return NoContent();
}
``` 
Execute novamente:
```bash
dotnet test
```
Os testes agora passam.
Passo 3: Refatorar
O código está limpo e não precisa de refatoração.
