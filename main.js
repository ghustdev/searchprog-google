import { Application } from "@splinetool/runtime";
import { knowledgeBase } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  // Animação 3D do Spline
  const canvas = document.getElementById("canvas3d");
  const app = new Application(canvas);
  app.load("https://prod.spline.design/rD-aa0pYm2p32zPr/scene.splinecode");

  // Elementos do DOM
  const searchInput = document.getElementById("input");
  const searchButton = document.getElementById("button");
  const resultsContainer = document.getElementById("results-container");
  const topicTagsContainer = document.getElementById("topic-tags-container");

  // Função para renderizar os cards de conhecimento
  const renderKnowledgeCards = (items) => {
    resultsContainer.innerHTML = ""; // Limpa resultados anteriores

    if (items.length === 0) {
      resultsContainer.innerHTML =
        '<p class="no-results">Nenhum tópico encontrado.</p>';
      return;
    }

    items.forEach((item) => {
      const card = document.createElement("div");
      card.className = "track-card";

      const title = document.createElement("h2");
      title.textContent = item.title;

      const explanation = document.createElement("p");
      explanation.textContent = item.explanation;

      const relatedTech = document.createElement("div");
      relatedTech.className = "related-tech";
      relatedTech.innerHTML = `<strong>Tecnologias Relacionadas:</strong> ${item.related}`;

      card.appendChild(title);
      card.appendChild(explanation);
      card.appendChild(relatedTech);
      resultsContainer.appendChild(card);
    });
  };

  // Função para renderizar as tags de tópico
  const renderTopicTags = () => {
    const allTags = new Set();
    knowledgeBase.forEach(item => {
        allTags.add(item.title);
    });

    allTags.forEach(tag => {
        const tagElement = document.createElement('button');
        tagElement.className = 'topic-tag';
        tagElement.textContent = tag;
        tagElement.addEventListener('click', () => {
            searchInput.value = tag;
            handleSearch();
        });
        topicTagsContainer.appendChild(tagElement);
    });
  }

  // Função de busca
  const handleSearch = () => {
    const query = searchInput.value.toLowerCase().trim();

    const filteredItems = knowledgeBase.filter((item) =>
      item.tags.some((tag) => tag.toLowerCase().includes(query)),
    );

    renderKnowledgeCards(filteredItems);
  };

  // Event Listeners
  searchButton.addEventListener("click", handleSearch);
  searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  });

  // Renderização inicial
  renderTopicTags();
  renderKnowledgeCards(knowledgeBase);
});
