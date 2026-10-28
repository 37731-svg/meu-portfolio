# 💻 Portfólio Pessoal — Maria Clara Nunes Lopes

Site de portfólio pessoal e profissional desenvolvido para **Maria Clara Nunes Lopes**, estudante do curso **Técnico em Informática**.

Projetado com estética moderna, minimalista e tecnológica, com foco em alta performance, acessibilidade e responsividade para todos os dispositivos (computadores, tablets e smartphones).

---

## 🎨 Identidade Visual & Design

- **Paleta de Cores**: Fundo azul-marinho profundo (`#060B18` e `#0B152D`) com acentos em azul-claro vibrante (`#38BDF8`), ciano (`#00E5FF`) e branco puro (`#FFFFFF`).
- **Tipografia**: *Plus Jakarta Sans* para leitura limpa e moderna, complementada por *JetBrains Mono* para tags e elementos tecnológicos.
- **Componentes**: Cards com cantos arredondados, efeitos de reflexo (glassmorphism), sombras discretas e transições suaves ao passar o mouse.
- **Acessibilidade**: Estrutura semântica em HTML5, alto contraste visual e suporte completo a navegação por teclado.

---

## 📂 Estrutura de Arquivos

```
meu-portifolio/
├── index.html         # Estrutura semântica completa e acessível
├── css/
│   └── style.css      # Sistema de design, responsividade e animações
├── js/
│   └── main.js        # Lógica de menu, rolagem suave, cópia e validação
└── README.md          # Guia de execução e publicação
```

---

## 🚀 Seções & Funcionalidades

0. **Alternador de Tema (Modo Claro / Modo Escuro)**:
   - Botão interativo no menu superior com ícone de lua 🌙 no modo escuro e sol ☀️ no modo claro.
   - Transição suave entre paletas em todo o site (cards, textos, botões e formulário).
   - Persistência automática da preferência no navegador via `localStorage`.
   - Totalmente responsivo para computadores, tablets e smartphones.

1. **Início (Hero)**:
   - Apresentação: Nome, título de *Técnica de Informática*, badge de status e botões de chamada para ação (*Conhecer Meus Projetos* e *Entrar em Contato*).
   - Janela tecnológica interativa simulando código e destacando competências fundamentais.

2. **Sobre Mim**:
   - Apresentação pessoal focada no aprendizado contínuo e paixão por tecnologia.
   - Cards de atributos: Formação Técnica, Agilidade, Vontade de Aprender e Objetivos em TI.

3. **Projetos**:
   - Cards para trabalhos escolares e exercícios de programação com ilustrações vetoriais, tags técnicas e links.
   - Links diretos para os repositórios no GitHub de Maria Clara (`https://github.com/37731-svg`).

4. **Habilidades**:
   - Destaque especial para a competência de **Agilidade** (capacidade de rápida adaptação e assimilação).
   - Barras de progresso e métricas visuais categorizadas em *Desenvolvimento & Web*, *TI & Infraestrutura* e *Ferramentas & Metodologia*.

5. **Contato**:
   - Link direto e botão interativo de **Copiar E-mail** (`mariaclaralp013@gmail.com`) com feedback visual imediato.
   - Link direto para o perfil no **GitHub** (`https://github.com/37731-svg`).
   - Formulário com validação em tempo real: valida o preenchimento de nome, formato do e-mail e mensagem antes de acionar o cliente de e-mail de forma transparente e segura.

---

## 🛠️ Como Executar o Projeto Localmente

Você pode visualizar e rodar o site em sua máquina de diferentes formas:

### Opção 1: Abrir diretamente no navegador (Mais simples)
1. Dê um duplo clique no arquivo [`index.html`](file:///c:/Users/Aluno/Desktop/meu-portifolio/index.html).
2. O site abrirá imediatamente em seu navegador padrão (Chrome, Edge, Firefox, etc.).

### Opção 2: Com o VS Code (Extensão Live Server)
1. Abra a pasta `meu-portifolio` no **VS Code**.
2. Clique com o botão direito sobre [`index.html`](file:///c:/Users/Aluno/Desktop/meu-portifolio/index.html) e selecione **Open with Live Server**.
3. O site será atualizado automaticamente sempre que você salvar alterações.

### Opção 3: Usando Python
Abra o terminal na pasta do projeto e execute:
```bash
python -m http.server 8080
```
Em seguida, acesse no navegador: `http://localhost:8080`

### Opção 4: Usando Node.js
Abra o terminal na pasta do projeto e execute:
```bash
npx serve .
```

---

## 🌐 Como Publicar o Site Gratuitamente na Web

### Método Recomendado: GitHub Pages (100% Gratuito)
1. Crie um novo repositório público no seu GitHub (`https://github.com/37731-svg`) com o nome:
   - `meu-portifolio` ou `37731-svg.github.io`
2. No seu computador, suba os arquivos para o repositório:
   ```bash
   git init
   git add .
   git commit -m "Meu primeiro portfólio de TI"
   git branch -M main
   git remote add origin https://github.com/37731-svg/NOME-DO-REPOSITORIO.git
   git push -u origin main
   ```
3. No GitHub, acesse a aba **Settings** do repositório.
4. No menu lateral, clique em **Pages**.
5. Em **Branch**, selecione `main` e a pasta `/ (root)`. Clique em **Save**.
6. Em instantes, seu site estará disponível na internet com um link público (ex: `https://37731-svg.github.io/meu-portifolio/`).

### Alternativas Gratuitas: Vercel ou Netlify
- Basta fazer login na [Vercel](https://vercel.com) ou no [Netlify](https://www.netlify.com) com sua conta do GitHub e selecionar o repositório do portfólio. A publicação é automática em menos de 1 minuto!
