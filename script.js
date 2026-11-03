const menuCategories = [
  {
    id: "arepas",
    title: "Arepas",
    description: "Tradición venezolana hecha al momento.",
    icon: "🫓",
    items: [
      {
        name: "2 contorno",
        price: "4.00",
        description: "Arepa sencilla con dos contornos a elegir.",
        info: "2 contornos",
        tag: "Popular",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80",
        alt: "Arepa con contorno"
      },
      {
        name: "3 contorno",
        price: "5.00",
        description: "Arepa con tres opciones de contorno para disfrutar.",
        info: "3 contornos",
        tag: "",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
        alt: "Arepa con tres contornos"
      },
      {
        name: "Contornos especiales",
        price: "6.00",
        description: "Arepa con relleno especial y una selección premium de contorno.",
        info: "Especial",
        tag: "",
        image: "https://images.unsplash.com/photo-1598214886806-c87b84b7078b?auto=format&fit=crop&w=800&q=80",
        alt: "Arepa especial"
      },
      {
        name: "Desayuno criollo",
        price: "7.00",
        description: "Punta de sabor tradicional con la esencia de un desayuno venezolano.",
        info: "Desayuno",
        tag: "",
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
        alt: "Desayuno criollo"
      },
      {
        name: "Bandeja grelhada",
        price: "7.00",
        description: "Una opción completa y sabrosa para empezar el día con fuerza.",
        info: "Bandeja",
        tag: "",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
        alt: "Bandeja grelhada"
      },
      {
        name: "Arepa viuda",
        price: "1.00",
        description: "Arepa pequeña, sencilla y perfecta como complemento o snack.",
        info: "Individual",
        tag: "",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        alt: "Arepa viuda"
      },
      {
        name: "Envase de llevar",
        price: "0.50",
        description: "Envase ideal para llevar tu arepa o comida de forma práctica.",
        info: "Accesorio",
        tag: "",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
        alt: "Envase de llevar"
      }
    ]
  },
  {
    id: "empanadas",
    title: "Empanadas",
    description: "Crujientes, sabrosas y listas para disfrutar.",
    icon: "🥟",
    items: [
      {
        name: "Empanadas básicas",
        price: "1.50",
        description: "Clásicas y bien rellenas para ese antojo rápido.",
        info: "Básicas",
        tag: "",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
        alt: "Empanadas básicas"
      },
      {
        name: "Empanadas especiales",
        price: "2.00",
        description: "Versión con relleno más sabroso y contundente.",
        info: "Especiales",
        tag: "",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
        alt: "Empanadas especiales"
      },
      {
        name: "Empanadas de mariscos",
        price: "3.00",
        description: "La combinación marinera más deliciosa de nuestra cocina.",
        info: "Mariscos",
        tag: "",
        image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80",
        alt: "Empanadas de mariscos"
      }
    ]
  },
  {
    id: "almuerzos",
    title: "Almuerzos",
    description: "Acompañados con 3 contornos a su elección.",
    icon: "🍽️",
    items: [
      {
        name: "Milanesa de pollo a la plancha",
        price: "8.00",
        description: "Pollo a la plancha con la textura jugosa y sabor casero.",
        info: "3 contornos",
        tag: "",
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
        alt: "Milanesa de pollo"
      },
      {
        name: "Chuleta ahumada",
        price: "8.00",
        description: "Sabor ahumado, jugosa y equilibrada con nuestra sazón.",
        info: "3 contornos",
        tag: "",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        alt: "Chuleta ahumada"
      },
      {
        name: "Mechada",
        price: "8.00",
        description: "Carne mechada con intenso sabor y textura suave.",
        info: "3 contornos",
        tag: "",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        alt: "Mechada"
      },
      {
        name: "Bistec de solomo",
        price: "10.00",
        description: "Corte premium con sabor intenso y excelente textura.",
        info: "3 contornos",
        tag: "",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        alt: "Bistec de solomo"
      },
      {
        name: "Pernil",
        price: "8.00",
        description: "Pernil sabroso, tierno y perfecto para acompañar tus contornos.",
        info: "3 contornos",
        tag: "",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
        alt: "Pernil"
      },
      {
        name: "Asado negro",
        price: "10.00",
        description: "Plato contundente con sabor profundo y tradición casera.",
        info: "3 contornos",
        tag: "",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        alt: "Asado negro"
      }
    ]
  },
  {
    id: "contornos",
    title: "Contornos",
    description: "Opciones para acompañar todos tus platos.",
    icon: "🥗",
    items: [
      { name: "Arroz", price: "—", description: "Acompañamiento clásico y ligero.", info: "Incluido", tag: "", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80", alt: "Arroz" },
      { name: "Pasta larga o corta", price: "—", description: "Sabor casero y perfecto para combinar con carnes.", info: "Incluido", tag: "", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80", alt: "Pasta" },
      { name: "Ensalada mixta", price: "—", description: "Fresca, ligera y equilibrada.", info: "Incluido", tag: "", image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80", alt: "Ensalada mixta" },
      { name: "Ensalada rallada", price: "—", description: "Sabor tradicional con textura fresca.", info: "Incluido", tag: "", image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80", alt: "Ensalada rallada" },
      { name: "Tajada", price: "—", description: "Clásico acompañante para combinar a tu gusto.", info: "Incluido", tag: "", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80", alt: "Tajada" },
      { name: "Caraota", price: "—", description: "Acompañamiento tradicional con sabor casero.", info: "Incluido", tag: "", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", alt: "Caraota" },
      { name: "Arepita frita", price: "—", description: "El clásico toque dorado de la cocina venezolana.", info: "Incluido", tag: "", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80", alt: "Arepita frita" },
      { name: "Ensalada cocida", price: "—", description: "Opción reconfortante y fresca para acompañar.", info: "Incluido", tag: "", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80", alt: "Ensalada cocida" }
    ]
  },
  {
    id: "especiales",
    title: "Especiales",
    description: "Platos y acompañamientos que marcan la diferencia.",
    icon: "🔥",
    items: [
      {
        name: "Sopa de costilla",
        price: "6.00",
        description: "Caldo sabroso y reconfortante con sabor casero.",
        info: "Porción",
        tag: "",
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
        alt: "Sopa de costilla"
      },
      {
        name: "Carne en vara",
        price: "4.00",
        description: "100 gramos de carne en vara, lista para disfrutar.",
        info: "100 g",
        tag: "",
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        alt: "Carne en vara"
      },
      {
        name: "Pork belly",
        price: "4.00",
        description: "100 gramos de sabor intenso y textura dorada.",
        info: "100 g",
        tag: "",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
        alt: "Pork belly"
      },
      {
        name: "Pollo asado",
        price: "15.00",
        description: "Acompañado con yuca o arepita frita y ensalada mixta o rallada.",
        info: "Con guarnición",
        tag: "",
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80",
        alt: "Pollo asado"
      }
    ]
  }
];

const menuContainer = document.getElementById("menu-container");
const categoryButtons = document.querySelectorAll(".category-btn");

function formatPrice(value) {
  if (value === "—") return "—";
  return `$${value}`;
}

function renderMenu() {
  menuContainer.innerHTML = menuCategories.map((category) => `
    <section class="menu-section" id="${category.id}" data-section="${category.id}">
      <div class="category-heading">
        <div class="category-icon">${category.icon}</div>
        <div>
          <h2>${category.title}</h2>
          <p>${category.description}</p>
        </div>
      </div>
      <div class="products-grid">
        ${category.items.map((item) => `
          <article class="product-card">
            <div class="product-image">
              <img src="${item.image}" alt="${item.alt}" loading="lazy">
              ${item.tag ? `<span class="product-tag">${item.tag}</span>` : ""}
            </div>
            <div class="product-content">
              <div class="product-title-row">
                <h3 class="product-title">${item.name}</h3>
                <span class="product-price">${formatPrice(item.price)}</span>
              </div>
              <p class="product-description">${item.description}</p>
              <div class="product-footer">
                <span class="product-info">${item.info}</span>
                <button class="product-action" data-product="${item.name}" data-price="${item.price}">
                  Ver detalle <span>↗</span>
                </button>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");

  const menuSections = document.querySelectorAll(".menu-section");

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.category;

      categoryButtons.forEach((btn) => {
        btn.classList.toggle("active", btn === button);
        btn.setAttribute("aria-pressed", btn === button ? "true" : "false");
      });

      menuSections.forEach((section) => {
        const isVisible = selected === "all" || section.dataset.section === selected;
        section.classList.toggle("hidden", !isVisible);
      });

      document.querySelector(".menu-intro").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  document.querySelectorAll(".product-action").forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.dataset.product;
      const price = button.dataset.price;
      const priceText = price === "—" ? "Precio: consultar" : `Precio: $${price}`;
      alert(`${name}\n\n${priceText}\n\n¡Gracias por elegir La Arepera Grelhada!`);
    });
  });
}

renderMenu();

const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 350);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
