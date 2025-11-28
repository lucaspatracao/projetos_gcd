# GC&D - Gestão de Componentes Defeituosos

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-0BSD-green.svg)
![React Native](https://img.shields.io/badge/React%20Native-0.73.6-61DAFB.svg)
![Expo](https://img.shields.io/badge/Expo-50.0.20-000020.svg)

**Sistema de gestão de ferramentas e defeitos para laboratórios educacionais**

[Documentação](#-documentação) • [Funcionalidades](#-funcionalidades) • [Instalação](#-instalação) • [Tecnologias](#-tecnologias)

<br>

**🎥 Pitches do Projeto**
### Pitch Comercial
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/shorts/iIA9IFzOtyU?si=IpIqXmFdf87Jkmbp)
[![Google Drive](https://img.shields.io/badge/Google%20Drive-4285F4?style=for-the-badge&logo=googledrive&logoColor=white)](https://drive.google.com/file/d/1six47SyG_GGaPObUWj3zy5WZJb3FCzF6/view?usp=sharing)

### Pitch Técnico
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/shorts/K1B_WgI66JE)
[![Google Drive](https://img.shields.io/badge/Google%20Drive-4285F4?style=for-the-badge&logo=googledrive&logoColor=white)](https://drive.google.com/file/d/1GmiG-Xbn3golRfZIpCWAXBu5O5fv7eDx/view?usp=sharing)

</div>

---

## 📋 Sobre o Projeto

O **GCD (Gestão de Componentes Defeituosos)** é uma aplicação mobile desenvolvida em React Native com Expo, projetada para gerenciar ferramentas, salas e defeitos em laboratórios educacionais, especialmente para instituições SENAI.

O sistema permite que **alunos**, **professores** e **administradores** trabalhem de forma colaborativa para manter um controle eficiente sobre o estado das ferramentas, reportar defeitos, gerenciar salas e acompanhar a manutenção de equipamentos.

### 🎯 Objetivo

Facilitar o gerenciamento de ferramentas e componentes defeituosos em laboratórios, proporcionando:

- **Controle centralizado** de ferramentas e equipamentos
- **Rastreamento de defeitos** com fotos e descrições detalhadas
- **Gestão de usuários** com diferentes níveis de acesso
- **Dashboard analítico** com métricas e visualizações
- **Interface intuitiva** e responsiva para todos os dispositivos

---

## ✨ Funcionalidades

### 🔐 Autenticação e Usuários

- **Sistema de Login/Cadastro** com validação de credenciais
- **Recuperação de Senha** funcional localmente
- **Gerenciamento de Usuários** com três níveis de acesso:
  - 👨‍🎓 **Alunos**: Visualização e reporte de defeitos
  - 👨‍🏫 **Professores**: Validação de defeitos e gerenciamento de salas/ferramentas
  - 👨‍💼 **Administradores**: Controle total do sistema
- **Aprovação de Usuários** pendentes
- **Designação de Salas** para professores

### 🛠️ Gerenciamento de Ferramentas

- **Cadastro completo** de ferramentas com:
  - Informações básicas (nome, patrimônio, descrição)
  - Especificações técnicas (fabricante, modelo, número de série)
  - Localização (sala, localização detalhada)
  - Status (disponível, em uso, manutenção, descartada)
  - Fotos e imagens
  - Data de aquisição
- **Listagem e busca** de ferramentas
- **Detalhes completos** com histórico de defeitos
- **Edição e exclusão** de ferramentas

### 🏢 Gerenciamento de Salas

- **Cadastro de salas** com informações completas
- **Associação de ferramentas** às salas
- **Visualização de salas** disponíveis
- **Designação de professores** responsáveis

### ⚠️ Sistema de Defeitos

- **Reporte de defeitos** com:
  - Descrição detalhada do problema
  - Categorização (mecânico, elétrico, funcional, estético, segurança)
  - Nível de urgência
  - Fotos como evidência
  - Observações adicionais
- **Inbox de defeitos** para professores validarem
- **Histórico completo** de defeitos por ferramenta
- **Status de defeitos**: Pendente, Validado, Rejeitado, Em Reparo, Resolvido
- **Modal detalhado** com todas as informações do defeito

### 📊 Dashboard Analítico

- **Métricas gerais**:
  - Total de ferramentas cadastradas
  - Número de salas
  - Defeitos em aberto
  - Usuários ativos
- **Gráficos de distribuição** por status
- **Métricas temporais** (última hora, 24h, 7 dias, 30 dias)
- **Visualizações intuitivas** com gráficos de barras

### 👤 Perfil do Usuário

- **Visualização de informações** pessoais
- **Edição de dados** (nome e email)
- **Logout** seguro

---

## 🛠️ Tecnologias

### Core
- **React Native** `0.73.6` - Framework mobile
- **Expo** `~50.0.20` - Plataforma de desenvolvimento
- **React** `18.2.0` - Biblioteca JavaScript

### Navegação
- **React Navigation** `^6.x` - Sistema de navegação
  - Stack Navigator
  - Drawer Navigator
  - Bottom Tabs Navigator

### Estilização
- **Styled Components** `^6.1.19` - CSS-in-JS
- **Expo Linear Gradient** `~12.7.2` - Gradientes
- **Material Community Icons** - Ícones

### Armazenamento
- **AsyncStorage** `1.21.0` - Armazenamento local persistente
- **Expo Crypto** `~12.8.1` - Geração de UUIDs

### Formulários e UI
- **React Native Picker** `2.6.1` - Seletores
- **Expo Image Picker** `~14.7.1` - Seleção de imagens
- **React Native Toast Message** `^2.3.3` - Notificações toast

### Outras
- **Expo Font** `~11.10.3` - Carregamento de fontes customizadas
- **React Native Reanimated** `~3.6.2` - Animações
- **React Native Gesture Handler** `~2.14.0` - Gestos

---

## 📦 Instalação

### Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**
- **Expo CLI** (instalado globalmente ou via npx)
- **Expo Go** (app para testar no dispositivo físico) - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) | [iOS](https://apps.apple.com/app/expo-go/id982107779)

### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/projetos_gcd.git
   cd projetos_gcd
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm start
   # ou
   expo start
   ```

4. **Execute no dispositivo**
   - **Android**: Pressione `a` no terminal ou escaneie o QR code com o Expo Go
   - **iOS**: Pressione `i` no terminal ou escaneie o QR code com a câmera (iOS)
   - **Web**: Pressione `w` no terminal

### Scripts Disponíveis

```bash
npm start          # Inicia o servidor Expo
npm run android    # Inicia no Android
npm run ios        # Inicia no iOS
npm run web        # Inicia no navegador web
npm test           # Executa os testes
```

---

## 🏗️ Estrutura do Projeto

```
gcd/
├── app/
│   ├── api/                    # API simulada para dados
│   ├── contexto/              # Context API (estado global)
│   │   ├── AutenticacaoContexto.js
│   │   ├── DefeitosContexto.js
│   │   ├── FerramentasContexto.js
│   │   ├── SalasContexto.js
│   │   ├── ToastContexto.js
│   │   └── UsuariosContexto.js
│   ├── navegacao/              # Configuração de navegação
│   ├── utils/                  # Utilitários e helpers
│   └── nucleo/                 # Configurações core
├── componentes/                # Componentes reutilizáveis
│   ├── Botoes/
│   ├── comuns/
│   ├── Defeitos/
│   ├── Formulario/
│   ├── layout/
│   └── Salas/
├── estilos/                    # Tema e estilos globais
│   └── tema.js
├── telas/                      # Telas da aplicação
│   ├── Administracao/
│   ├── Autenticacao/
│   ├── Defeitos/
│   ├── Ferramentas/
│   ├── Home/
│   ├── Perfil/
│   └── Salas/
├── assets/                     # Imagens e ícones
├── App.js                      # Componente raiz
├── app.json                    # Configuração Expo
└── package.json                # Dependências do projeto
```

---

## 🎨 Design System

O projeto utiliza um **sistema de design consistente** com:

- **Cores primárias**: Vermelho (#E74C3C) para ações principais
- **Tipografia**: Lato (Light, Regular, Bold, Black)
- **Espaçamentos**: Sistema de 8px (muito pequeno, pequeno, médio, grande, enorme)
- **Sombras**: Sistema de elevação com 4 níveis
- **Componentes reutilizáveis**: Botões, inputs, cards, modais padronizados

---

## 👥 Tipos de Usuário e Permissões

### 👨‍🎓 Aluno
- Visualizar salas disponíveis
- Visualizar ferramentas disponíveis
- Reportar defeitos em ferramentas
- Acompanhar defeitos reportados
- Visualizar dashboard com métricas gerais

### 👨‍🏫 Professor
- Todas as permissões de Aluno
- Validar/rejeitar defeitos reportados
- Gerenciar ferramentas (CRUD completo)
- Gerenciar salas (CRUD completo)
- Visualizar inbox de defeitos pendentes
- Designar salas para si mesmo

### 👨‍💼 Administrador
- Todas as permissões de Professor
- Gerenciar usuários (aprovar, editar, remover)
- Designar salas para professores
- Acesso completo ao sistema

---

## 📱 Telas Principais

### Autenticação
- **Apresentação**: Carrossel de introdução
- **Login**: Autenticação de usuários
- **Cadastro**: Registro de novos usuários
- **Recuperar Senha**: Redefinição de senha local

### Home
- **Painel Principal**: Acesso rápido às funcionalidades
- **Dashboard**: Métricas e gráficos analíticos

### Ferramentas
- **Lista de Ferramentas**: Visualização e busca
- **Detalhes da Ferramenta**: Informações completas e histórico
- **Formulário**: Cadastro/edição de ferramentas

### Defeitos
- **Reportar Defeito**: Formulário completo de reporte
- **Lista de Defeitos**: Histórico de defeitos
- **Inbox de Defeitos**: Validação de defeitos (professores)
- **Detalhes do Defeito**: Modal com informações completas

### Salas
- **Lista de Salas**: Visualização de salas cadastradas
- **Detalhes da Sala**: Informações e ferramentas associadas
- **Formulário**: Cadastro/edição de salas

### Administração
- **Gerenciar Usuários**: Lista, filtros e ações
- **Detalhes do Usuário**: Informações e edição
- **Designar Salas**: Associação de salas a professores

### Perfil
- **Perfil do Usuário**: Informações pessoais e edição
- **Sobre o Sistema**: Informações do app

---

## 🔧 Configuração e Desenvolvimento

### Variáveis de Ambiente

Atualmente, o projeto utiliza armazenamento local (`AsyncStorage`) para persistência de dados. Para produção, recomenda-se:

1. Configurar variáveis de ambiente para API
2. Implementar backend real
3. Configurar autenticação JWT
4. Implementar sincronização de dados

### Build para Produção

#### Gerar APK (Android)

1. **Instalar EAS CLI**
   ```bash
   npm install -g eas-cli
   ```

2. **Fazer login**
   ```bash
   eas login
   ```

3. **Configurar build**
   ```bash
   eas build:configure
   ```

4. **Gerar APK**
   ```bash
   eas build --platform android --profile preview
   ```

#### Gerar AAB (Play Store)

```bash
eas build --platform android --profile production
```

---

## 📊 Estado dos Dados

O sistema utiliza **AsyncStorage** para persistência local, simulando uma API. Os dados são armazenados localmente no dispositivo e incluem:

- Usuários cadastrados
- Ferramentas
- Salas
- Defeitos reportados

**Nota**: Os dados são perdidos ao desinstalar o aplicativo. Para produção, é necessário implementar um backend real.

---

## 🧪 Testes

O projeto inclui testes unitários para utilitários:

```bash
npm test
```

---

## 📝 Licença

Este projeto está licenciado sob a **0BSD License** - veja o arquivo `LICENSE` para mais detalhes.

---

## 👨‍💻 Desenvolvimento

### Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Código

- **Styled Components** para estilização
- **Context API** para gerenciamento de estado
- **Hooks** do React (useState, useEffect, useMemo, etc.)
- **Nomenclatura**: camelCase para variáveis, PascalCase para componentes
- **Estrutura**: Componentes organizados por funcionalidade

---

## 🐛 Problemas Conhecidos

- Fotos de defeitos utilizam placeholders (funcionalidade em desenvolvimento)
- Dados armazenados localmente (perdidos ao desinstalar)
- Alguns ícones podem não estar disponíveis em todas as versões do Material Community Icons

---

## 🚀 Roadmap

- [ ] Implementação de backend real
- [ ] Sincronização de dados em nuvem
- [ ] Notificações push
- [ ] Sistema de relatórios em PDF
- [ ] Integração com câmera nativa
- [ ] Modo offline completo
- [ ] Internacionalização (i18n)
- [ ] Testes automatizados (Jest + React Native Testing Library)

---

## 📞 Suporte

Para dúvidas, sugestões ou problemas:

- Abra uma [issue](https://github.com/seu-usuario/projetos_gcd/issues) no GitHub
- Entre em contato com a equipe de desenvolvimento

---

## 🙏 Agradecimentos

- **SENAI** - Pelo apoio e suporte ao projeto
- **Comunidade React Native** - Pela documentação e recursos
- **Expo** - Pela plataforma de desenvolvimento

---

<div align="center">

**Desenvolvido com ❤️ para laboratórios educacionais**

[⬆ Voltar ao topo](#gcd---gerenciamento-de-componentes-defeituosos)

</div>

