const tools = [
    {
        name: "JavaScript",
        tags: ["linguagem", "frontend", "backend", "web"],
        description: "Linguagem de programação versátil e essencial para desenvolvimento web. Permite criar aplicações interativas no navegador e no servidor com Node.js. É a base do desenvolvimento web moderno.",
        related: ["TypeScript", "Node.js", "React", "Vue.js"]
    },
    {
        name: "React",
        tags: ["framework", "frontend", "javascript", "ui"],
        description: "Biblioteca JavaScript para construção de interfaces de usuário. Desenvolvida pelo Facebook, utiliza componentes reutilizáveis e virtual DOM para alta performance. Ideal para SPAs e aplicações complexas.",
        related: ["Next.js", "Redux", "React Native", "JavaScript"]
    },
    {
        name: "Python",
        tags: ["linguagem", "backend", "data-science", "ia"],
        description: "Linguagem de alto nível conhecida por sua sintaxe clara e legível. Amplamente usada em ciência de dados, machine learning, automação e desenvolvimento web. Possui vasto ecossistema de bibliotecas.",
        related: ["Django", "Flask", "Pandas", "TensorFlow"]
    },
    {
        name: "Node.js",
        tags: ["runtime", "backend", "javascript", "api"],
        description: "Ambiente de execução JavaScript no servidor. Permite usar JavaScript no backend com alta performance e escalabilidade. Ideal para APIs REST, microserviços e aplicações real-time.",
        related: ["Express", "NestJS", "JavaScript", "MongoDB"]
    },
    {
        name: "Docker",
        tags: ["devops", "container", "infraestrutura", "deploy"],
        description: "Plataforma de containerização que empacota aplicações e dependências em containers isolados. Garante consistência entre ambientes de desenvolvimento e produção. Essencial para DevOps moderno.",
        related: ["Kubernetes", "Docker Compose", "CI/CD", "Linux"]
    },
    {
        name: "Git",
        tags: ["versionamento", "controle", "colaboração", "devops"],
        description: "Sistema de controle de versão distribuído mais popular do mundo. Permite rastrear mudanças no código, trabalhar em equipe e gerenciar branches. Fundamental para qualquer desenvolvedor.",
        related: ["GitHub", "GitLab", "Bitbucket", "CI/CD"]
    },
    {
        name: "TypeScript",
        tags: ["linguagem", "javascript", "frontend", "backend"],
        description: "Superset do JavaScript que adiciona tipagem estática. Melhora a qualidade do código, facilita refatoração e previne erros. Amplamente adotado em projetos enterprise e grandes equipes.",
        related: ["JavaScript", "Angular", "React", "Node.js"]
    },
    {
        name: "PostgreSQL",
        tags: ["database", "sql", "backend", "dados"],
        description: "Banco de dados relacional open-source robusto e avançado. Suporta JSON, full-text search e extensões. Ideal para aplicações que exigem integridade e consultas complexas.",
        related: ["SQL", "MongoDB", "Redis", "Prisma"]
    },
    {
        name: "Vue.js",
        tags: ["framework", "frontend", "javascript", "ui"],
        description: "Framework JavaScript progressivo para construção de interfaces. Combina o melhor do React e Angular com curva de aprendizado suave. Excelente documentação e ecossistema crescente.",
        related: ["Nuxt.js", "Vuex", "JavaScript", "React"]
    },
    {
        name: "MongoDB",
        tags: ["database", "nosql", "backend", "dados"],
        description: "Banco de dados NoSQL orientado a documentos. Armazena dados em formato JSON flexível, ideal para aplicações que precisam de escalabilidade horizontal e esquemas dinâmicos.",
        related: ["Mongoose", "Node.js", "Express", "PostgreSQL"]
    },
    {
        name: "Tailwind CSS",
        tags: ["css", "framework", "frontend", "ui"],
        description: "Framework CSS utility-first que acelera o desenvolvimento de interfaces. Oferece classes utilitárias para estilização rápida sem sair do HTML. Altamente customizável e otimizado.",
        related: ["CSS", "PostCSS", "React", "Vue.js"]
    },
    {
        name: "Next.js",
        tags: ["framework", "react", "frontend", "ssr"],
        description: "Framework React para produção com renderização server-side e geração de sites estáticos. Oferece roteamento automático, otimização de imagens e excelente performance. Ideal para SEO.",
        related: ["React", "Vercel", "TypeScript", "Node.js"]
    },
    {
        name: "AWS",
        tags: ["cloud", "infraestrutura", "devops", "deploy"],
        description: "Plataforma de cloud computing líder mundial. Oferece mais de 200 serviços incluindo computação, armazenamento, banco de dados e machine learning. Escalável e confiável.",
        related: ["EC2", "S3", "Lambda", "Docker"]
    },
    {
        name: "GraphQL",
        tags: ["api", "backend", "query", "dados"],
        description: "Linguagem de consulta para APIs desenvolvida pelo Facebook. Permite que clientes solicitem exatamente os dados necessários. Mais eficiente que REST para aplicações complexas.",
        related: ["Apollo", "REST", "Node.js", "React"]
    },
    {
        name: "Kubernetes",
        tags: ["devops", "container", "orquestração", "cloud"],
        description: "Sistema de orquestração de containers open-source. Automatiza deploy, escalonamento e gerenciamento de aplicações containerizadas. Padrão da indústria para cloud-native.",
        related: ["Docker", "Helm", "AWS", "DevOps"]
    },
    {
        name: "Redis",
        tags: ["database", "cache", "backend", "performance"],
        description: "Banco de dados em memória de alta performance. Usado como cache, message broker e armazenamento de sessões. Suporta estruturas de dados avançadas e pub/sub.",
        related: ["Node.js", "PostgreSQL", "MongoDB", "Cache"]
    },
    {
        name: "Django",
        tags: ["framework", "python", "backend", "web"],
        description: "Framework web Python de alto nível que incentiva desenvolvimento rápido e design limpo. Inclui ORM, admin panel e sistema de autenticação. Ideal para aplicações robustas.",
        related: ["Python", "PostgreSQL", "REST", "Flask"]
    },
    {
        name: "VS Code",
        tags: ["editor", "ide", "ferramenta", "desenvolvimento"],
        description: "Editor de código open-source da Microsoft. Leve, extensível e com suporte a múltiplas linguagens. Possui debugging integrado, Git e marketplace com milhares de extensões.",
        related: ["Git", "Extensions", "IntelliSense", "Debug"]
    }
];

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const cardsContainer = document.getElementById('cardsContainer');
const noResults = document.getElementById('noResults');

function renderCards(filteredTools) {
    cardsContainer.innerHTML = '';
    
    if (filteredTools.length === 0) {
        noResults.classList.add('show');
        return;
    }
    
    noResults.classList.remove('show');
    
    filteredTools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.innerHTML = `
            <div class="card-header">
                <div class="card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                </div>
                <h2>${tool.name}</h2>
            </div>
            <div class="tags">
                ${tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <p>${tool.description}</p>
            <div class="related">
                <strong>🔗 Ferramentas Relacionadas:</strong>
                <div class="related-list">
                    ${tool.related.map(item => `<span class="related-item">${item}</span>`).join('')}
                </div>
            </div>
        `;
        cardsContainer.appendChild(card);
    });
}

function searchTools() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (!query) {
        renderCards(tools);
        return;
    }
    
    const filtered = tools.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.tags.some(tag => tag.toLowerCase().includes(query)) ||
        tool.description.toLowerCase().includes(query) ||
        tool.related.some(rel => rel.toLowerCase().includes(query))
    );
    
    renderCards(filtered);
}

searchInput.addEventListener('input', searchTools);
searchBtn.addEventListener('click', searchTools);

renderCards(tools);
