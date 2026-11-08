
"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const STORE = {
  tasks: "homeease_tasks_v1",
  shopping: "homeease_shopping_v1",
  settings: "homeease_settings_v1"
};

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const DEFAULT_TASKS = [
  { name: "Sweep the floor", category: "Cleaning", day: 0, time: "08:00", icon: "🧹" },
  { name: "Mop the floor", category: "Cleaning", day: 0, time: "09:00", icon: "🪣" },
  { name: "Wash the dishes", category: "Kitchen", day: 0, time: "10:00", icon: "🍽️" },
  { name: "Make the bed", category: "Organisation", day: 0, time: "07:00", icon: "🛏️" },
  { name: "Clean the bathroom", category: "Cleaning", day: 1, time: "09:00", icon: "🧽" },
  { name: "Do the laundry", category: "Laundry", day: 2, time: "10:00", icon: "👕" },
  { name: "Dust the furniture", category: "Cleaning", day: 3, time: "09:00", icon: "✨" },
  { name: "Change the bedsheets", category: "Organisation", day: 4, time: "10:00", icon: "🛏️" },
  { name: "Clean the kitchen", category: "Kitchen", day: 5, time: "09:00", icon: "🍳" },
  { name: "Tidy the living room", category: "Organisation", day: 6, time: "10:00", icon: "🛋️" }
];


const homeEaseTranslations = {
  en: {
    languageTitle: "Website language",
    languageDescription: "Choose a language for your HomeEase experience.",
    dashboard: "Dashboard",
    chores: "House chores",
    planner: "Weekly planner",
    shopping: "Shopping list",
    settings: "Settings",
    today: "Today's chores",
    addChore: "Add a chore",
    completed: "Completed",
    pending: "Pending",
    sweep: "Sweep the floor",
    mop: "Mop the floor",
    dishes: "Wash the dishes",
    laundry: "Do the laundry",
    dust: "Dust the furniture",
    bed: "Make the bed",
    bathroom: "Clean the bathroom",
    kitchen: "Clean the kitchen",
    livingRoom: "Tidy the living room",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    search: "Search",
    welcome: "Welcome to HomeEase"
  },

  fr: {
    languageTitle: "Langue du site",
    languageDescription: "Choisissez la langue de HomeEase.",
    dashboard: "Tableau de bord",
    chores: "Tâches ménagères",
    planner: "Planning hebdomadaire",
    shopping: "Liste de courses",
    settings: "Paramètres",
    today: "Tâches du jour",
    addChore: "Ajouter une tâche",
    completed: "Terminées",
    pending: "En attente",
    sweep: "Balayer le sol",
    mop: "Passer la serpillière",
    dishes: "Faire la vaisselle",
    laundry: "Faire la lessive",
    dust: "Épousseter les meubles",
    bed: "Faire le lit",
    bathroom: "Nettoyer la salle de bain",
    kitchen: "Nettoyer la cuisine",
    livingRoom: "Ranger le salon",
    save: "Enregistrer",
    cancel: "Annuler",
    delete: "Supprimer",
    edit: "Modifier",
    search: "Rechercher",
    welcome: "Bienvenue sur HomeEase"
  },

  es: {
    languageTitle: "Idioma del sitio",
    languageDescription: "Elige el idioma de HomeEase.",
    dashboard: "Panel principal",
    chores: "Tareas del hogar",
    planner: "Planificador semanal",
    shopping: "Lista de compras",
    settings: "Configuración",
    today: "Tareas de hoy",
    addChore: "Añadir tarea",
    completed: "Completadas",
    pending: "Pendientes",
    sweep: "Barrer el suelo",
    mop: "Fregar el suelo",
    dishes: "Lavar los platos",
    laundry: "Lavar la ropa",
    dust: "Quitar el polvo",
    bed: "Hacer la cama",
    bathroom: "Limpiar el baño",
    kitchen: "Limpiar la cocina",
    livingRoom: "Ordenar la sala",
    save: "Guardar",
    cancel: "Cancelar",
    delete: "Eliminar",
    edit: "Editar",
    search: "Buscar",
    welcome: "Bienvenido a HomeEase"
  },

  pt: {
    languageTitle: "Idioma do site",
    languageDescription: "Escolha o idioma do HomeEase.",
    dashboard: "Painel",
    chores: "Tarefas domésticas",
    planner: "Planeador semanal",
    shopping: "Lista de compras",
    settings: "Definições",
    today: "Tarefas de hoje",
    addChore: "Adicionar tarefa",
    completed: "Concluídas",
    pending: "Pendentes",
    sweep: "Varrer o chão",
    mop: "Passar a esfregona",
    dishes: "Lavar a louça",
    laundry: "Lavar a roupa",
    dust: "Limpar o pó",
    bed: "Fazer a cama",
    bathroom: "Limpar a casa de banho",
    kitchen: "Limpar a cozinha",
    livingRoom: "Arrumar a sala",
    save: "Guardar",
    cancel: "Cancelar",
    delete: "Eliminar",
    edit: "Editar",
    search: "Pesquisar",
    welcome: "Bem-vindo ao HomeEase"
  },

  ar: {
    languageTitle: "لغة الموقع",
    languageDescription: "اختر لغة HomeEase.",
    dashboard: "لوحة التحكم",
    chores: "الأعمال المنزلية",
    planner: "المخطط الأسبوعي",
    shopping: "قائمة التسوق",
    settings: "الإعدادات",
    today: "مهام اليوم",
    addChore: "إضافة مهمة",
    completed: "مكتملة",
    pending: "قيد الانتظار",
    sweep: "كنس الأرضية",
    mop: "مسح الأرضية",
    dishes: "غسل الأطباق",
    laundry: "غسل الملابس",
    dust: "تنظيف الغبار",
    bed: "ترتيب السرير",
    bathroom: "تنظيف الحمام",
    kitchen: "تنظيف المطبخ",
    livingRoom: "ترتيب غرفة المعيشة",
    save: "حفظ",
    cancel: "إلغاء",
    delete: "حذف",
    edit: "تعديل",
    search: "بحث",
    welcome: "مرحباً بك في HomeEase"
  },

  ha: {
    languageTitle: "Harshen gidan yanar gizo",
    languageDescription: "Zaɓi harshen HomeEase.",
    dashboard: "Babban shafi",
    chores: "Ayyukan gida",
    planner: "Tsarin mako",
    shopping: "Jerin sayayya",
    settings: "Saituna",
    today: "Ayyukan yau",
    addChore: "Ƙara aiki",
    completed: "An kammala",
    pending: "Ana jira",
    sweep: "Share ƙasa",
    mop: "Goge ƙasa",
    dishes: "Wanke kwanoni",
    laundry: "Wanke tufafi",
    dust: "Goge ƙura",
    bed: "Gyara gado",
    bathroom: "Tsaftace banɗaki",
    kitchen: "Tsaftace ɗakin girki",
    livingRoom: "Gyara falon gida",
    save: "Ajiye",
    cancel: "Soke",
    delete: "Goge",
    edit: "Gyara",
    search: "Bincika",
    welcome: "Barka da zuwa HomeEase"
  },

  yo: {
    languageTitle: "Èdè ojúlé",
    languageDescription: "Yan èdè tí o fẹ́ lò lórí HomeEase.",
    dashboard: "Ojú ìṣàkóso",
    chores: "Iṣẹ́ ilé",
    planner: "Ètò ọ̀sẹ̀",
    shopping: "Àkójọ ohun ìrà",
    settings: "Ètò",
    today: "Iṣẹ́ òní",
    addChore: "Fi iṣẹ́ kún un",
    completed: "Ti parí",
    pending: "Tí ó kù",
    sweep: "Gba ilẹ̀",
    mop: "Fọ ilẹ̀",
    dishes: "Fọ àwo",
    laundry: "Fọ aṣọ",
    dust: "Nu eruku",
    bed: "Tọ́jú ibùsùn",
    bathroom: "Nu balùwẹ̀",
    kitchen: "Nu ilé ìdáná",
    livingRoom: "Ṣètò yàrá ìgbàlejò",
    save: "Fipamọ́",
    cancel: "Fagilé",
    delete: "Pa rẹ́",
    edit: "Ṣàtúnṣe",
    search: "Wá kiri",
    welcome: "Káàbọ̀ sí HomeEase"
  },

  ig: {
    languageTitle: "Asụsụ weebụsaịtị",
    languageDescription: "Họrọ asụsụ ị chọrọ iji na HomeEase.",
    dashboard: "Ihu nchịkwa",
    chores: "Ọrụ ụlọ",
    planner: "Atụmatụ izu",
    shopping: "Ndepụta ịzụ ahịa",
    settings: "Ntọala",
    today: "Ọrụ taa",
    addChore: "Tinye ọrụ",
    completed: "Emechala",
    pending: "Nke fọdụrụ",
    sweep: "Zaa ala",
    mop: "Hichaa ala",
    dishes: "Sachaa efere",
    laundry: "Saa uwe",
    dust: "Hichapụ uzuzu",
    bed: "Dozie akwa",
    bathroom: "Hichaa ụlọ ịsa ahụ",
    kitchen: "Hichaa kichin",
    livingRoom: "Dozie ọnụ ụlọ",
    save: "Chekwaa",
    cancel: "Kagbuo",
    delete: "Hichapụ",
    edit: "Dezie",
    search: "Chọọ",
    welcome: "Nnọọ na HomeEase"
  },

  pcm: {
    languageTitle: "Website language",
    languageDescription: "Choose di language wey you wan use for HomeEase.",
    dashboard: "Main page",
    chores: "House work",
    planner: "Weekly plan",
    shopping: "Shopping list",
    settings: "Settings",
    today: "Today house work",
    addChore: "Add house work",
    completed: "Don finish",
    pending: "Still dey",
    sweep: "Sweep di floor",
    mop: "Mop di floor",
    dishes: "Wash plate",
    laundry: "Wash cloth",
    dust: "Clean dust",
    bed: "Arrange bed",
    bathroom: "Clean bathroom",
    kitchen: "Clean kitchen",
    livingRoom: "Arrange sitting room",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    search: "Search",
    welcome: "Welcome to HomeEase"
  }
};

function applyHomeEaseLanguage(language) {
  const translations =
    homeEaseTranslations[language] || homeEaseTranslations.en;

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (translations[key]) {
      element.textContent = translations[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;

    if (translations[key]) {
      element.placeholder = translations[key];
    }
  });

  localStorage.setItem("homeEaseLanguage", language);
}

const homeEaseLanguageSelect = document.getElementById("languageSelect");

if (homeEaseLanguageSelect) {
  const savedLanguage = localStorage.getItem("homeEaseLanguage") || "en";

  homeEaseLanguageSelect.value =
    homeEaseTranslations[savedLanguage] ? savedLanguage : "en";

  applyHomeEaseLanguage(homeEaseLanguageSelect.value);

  homeEaseLanguageSelect.addEventListener("change", (event) => {
    applyHomeEaseLanguage(event.target.value);
  });
}


const ICONS = {
  Cleaning: "🧹",
  Kitchen: "🍽️",
  Laundry: "👕",
  Organisation: "🛏️",
  Other: "✦"
};

function load(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    notify("Could not save data. Check your browser storage settings.");
  }
}

function makeId() {
  return window.crypto?.randomUUID?.() ||
    `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function localDay() {
  return new Date().getDay();
}

function dateKey(date = new Date()) {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
}

let tasks = load(STORE.tasks, null);
if (!Array.isArray(tasks)) {
  tasks = DEFAULT_TASKS.map((task, index) => ({
    ...task,
    id: makeId(),
    notes: "",
    done: false,
    completedDate: null,
    createdDate: dateKey(),
    defaultIndex: index
  }));
  save(STORE.tasks, tasks);
}

let shopping = load(STORE.shopping, []);
if (!Array.isArray(shopping)) shopping = [];

let settings = load(STORE.settings, {
  dark: false,
  name: "Home Manager"
});

let currentFilter = "all";
let currentCategory = "all";
let selectedDay = localDay();
let editingId = null;
let toastTimer;

function persistTasks() {
  save(STORE.tasks, tasks);
}

function notify(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function formatDate(date = new Date()) {
  return date.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
}

function todaysTasks() {
  return tasks.filter(task => task.day === localDay());
}

function getProgress(list) {
  if (!list.length) return 0;
  return Math.round(list.filter(task => task.done).length / list.length * 100);
}

function applySettings() {
  document.body.classList.toggle("dark", !!settings.dark);
  $("#themeToggle").textContent = settings.dark ? "☀" : "☾";
  $("#nameSetting").value = settings.name || "Home Manager";
  $$(".profile strong").forEach(el => {
    el.textContent = settings.name || "Home Manager";
  });
  $(".avatar").textContent = (settings.name || "H").trim().charAt(0).toUpperCase();
}

function updateHeader() {
  const now = new Date();
  $("#todayLabel").textContent = now.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
  $("#dateChip").textContent = now.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric"
  });
}

function goTo(page) {
  const target = $(`#page-${page}`);
  if (!target) return;

  $$(".page").forEach(el => el.classList.remove("active-page"));
  target.classList.add("active-page");

  $$(".nav-link").forEach(link => {
    link.classList.toggle("active", link.dataset.page === page);
  });

  $("#pageName").textContent = ({
    dashboard: "Dashboard",
    chores: "House chores",
    planner: "Weekly planner",
    shopping: "Shopping list",
    settings: "Settings"
  })[page] || "Dashboard";

  $("#sidebar").classList.remove("open");
  history.replaceState(null, "", `#${page}`);

  if (page === "planner") renderPlanner();
  if (page === "shopping") renderShopping();
  if (page === "chores") renderFullTasks();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function navigateFromHash() {
  const page = location.hash.replace("#", "");
  const allowed = ["dashboard", "chores", "planner", "shopping", "settings"];
  goTo(allowed.includes(page) ? page : "dashboard");
}

function taskRow(task, options = {}) {
  const { compact = false, shoppingItem = false } = options;

  if (shoppingItem) {
    return `
      <div class="task-row ${task.bought ? "is-done" : ""}">
        <input class="shopping-check" type="checkbox" data-shop-toggle="${task.id}"
          ${task.bought ? "checked" : ""} aria-label="Mark ${escapeHTML(task.name)} purchased">
        <span class="task-symbol">🛍️</span>
        <div class="task-details">
          <strong>${escapeHTML(task.name)}</strong>
          <small>${task.bought ? "Purchased" : "Still needed"}</small>
        </div>
        <div class="task-actions">
          <button type="button" class="delete-task" data-shop-delete="${task.id}" aria-label="Delete item">✕</button>
        </div>
      </div>`;
  }

  const category = escapeHTML(task.category || "Other");
  const notes = task.notes ? ` · ${escapeHTML(task.notes)}` : "";
  const time = task.time ? escapeHTML(task.time) : "No time set";

  return `
    <div class="task-row ${task.done ? "is-done" : ""}">
      <input class="task-check" type="checkbox" data-toggle="${task.id}"
        ${task.done ? "checked" : ""} aria-label="Complete ${escapeHTML(task.name)}">
      <span class="task-symbol">${escapeHTML(task.icon || ICONS[task.category] || "✦")}</span>
      <div class="task-details">
        <strong>${escapeHTML(task.name)}</strong>
        <small>${compact ? time : `${DAYS[task.day]} · ${time}`}${notes}</small>
        ${compact ? "" : `<span class="category-pill">${category}</span>`}
      </div>
      <div class="task-actions">
        <button type="button" data-edit="${task.id}" aria-label="Edit task">✎</button>
        <button type="button" class="delete-task" data-delete="${task.id}" aria-label="Delete task">✕</button>
      </div>
    </div>`;
}

function renderDashboard() {
  const today = todaysTasks();
  const done = today.filter(task => task.done).length;
  const pending = today.length - done;
  const progress = getProgress(today);

  $("#statDone").textContent = done;
  $("#statPending").textContent = pending;
  $("#statTotal").textContent = tasks.length;
  $("#progressText").textContent = `${progress}%`;
  $("#progressFill").style.width = `${progress}%`;

  const list = $("#dashboardTaskList");
  const empty = $("#dashboardEmpty");
  list.innerHTML = today.length
    ? today.slice().sort((a, b) => Number(a.done) - Number(b.done))
        .map(task => taskRow(task, { compact: true })).join("")
    : "";

  empty.classList.toggle("hidden", today.length !== 0);
  list.classList.toggle("hidden", today.length === 0);
}

function filteredTasks() {
  return tasks.filter(task => {
    const statusMatch =
      currentFilter === "all" ||
      (currentFilter === "pending" && !task.done) ||
      (currentFilter === "done" && task.done);
    const categoryMatch =
      currentCategory === "all" || task.category === currentCategory;
    return statusMatch && categoryMatch;
  });
}

function renderFullTasks() {
  const list = filteredTasks();
  $("#fullTaskList").innerHTML = list.map(task => taskRow(task)).join("");
  $("#fullEmpty").classList.toggle("hidden", list.length > 0);
  $("#fullTaskList").classList.toggle("hidden", list.length === 0);
  $("#choreCount").textContent =
    `${list.length} ${list.length === 1 ? "task" : "tasks"} shown`;
  $("#choreListTitle").textContent = ({
    all: "All your tasks",
    pending: "Tasks to do",
    done: "Completed tasks"
  })[currentFilter];
}

function renderPlanner() {
  const today = localDay();
  const grid = $("#weekGrid");

  grid.innerHTML = DAYS.map((day, index) => {
    const dayTasks = tasks.filter(task => task.day === index);
    const doneCount = dayTasks.filter(task => task.done).length;
    return `
      <button type="button" class="day-card ${selectedDay === index ? "selected" : ""}"
        data-day="${index}" aria-pressed="${selectedDay === index}">
        <small>${day.slice(0, 3)}</small>
        <strong>${index === today ? "• " : ""}${new Date(
          new Date().getFullYear(), new Date().getMonth(),
          new Date().getDate() + ((index - today + 7) % 7)
        ).getDate()}</strong>
        <span>${doneCount}/${dayTasks.length} done</span>
      </button>`;
  }).join("");

  const scheduled = tasks.filter(task => task.day === selectedDay)
    .slice().sort((a, b) => (a.time || "").localeCompare(b.time || ""));

  $("#scheduledTasks").innerHTML = scheduled.map(task => taskRow(task)).join("");
  $("#scheduledTasks").classList.toggle("hidden", scheduled.length === 0);

  let empty = $("#plannerEmpty");
  if (!empty) {
    empty = document.createElement("div");
    empty.id = "plannerEmpty";
    empty.className = "empty-state hidden";
    empty.innerHTML = "<span>✧</span><h3>A little breathing room</h3><p>No chores planned for this day yet.</p>";
    $("#scheduledTasks").after(empty);
  }
  empty.classList.toggle("hidden", scheduled.length > 0);
}

function renderShopping() {
  $("#shoppingList").innerHTML = shopping.map(item =>
    taskRow(item, { shoppingItem: true })).join("");

  $("#shoppingEmpty").classList.toggle("hidden", shopping.length > 0);
  $("#shoppingList").classList.toggle("hidden", shopping.length === 0);

  const remaining = shopping.filter(item => !item.bought).length;
  $("#shoppingCount").textContent =
    `${remaining} item${remaining === 1 ? "" : "s"} still needed`;
}

function renderAll() {
  renderDashboard();
  renderFullTasks();
  renderPlanner();
  renderShopping();
}

function openModal(task = null, category = "Cleaning", day = localDay()) {
  editingId = task?.id || null;
  $("#modalTitle").textContent = task ? "Edit your chore" : "Add a new chore";
  $("#taskName").value = task?.name || "";
  $("#taskCategory").value = task?.category || category;
  $("#taskDay").value = String(task?.day ?? day);
  $("#taskTime").value = task?.time || "";
  $("#taskNotes").value = task?.notes || "";
  $("#taskModal").classList.remove("hidden");
  $("#taskName").focus();
}

function closeModal() {
  $("#taskModal").classList.add("hidden");
  $("#taskForm").reset();
  editingId = null;
}

function addOrUpdateTask(event) {
  event.preventDefault();
  const name = $("#taskName").value.trim();
  if (!name) {
    $("#taskName").focus();
    return;
  }

  const category = $("#taskCategory").value;
  const previous = tasks.find(task => task.id === editingId);
  const task = {
    id: editingId || makeId(),
    name,
    category,
    day: Number($("#taskDay").value),
    time: $("#taskTime").value,
    notes: $("#taskNotes").value.trim(),
    icon: ICONS[category] || "✦",
    done: previous?.done || false,
    completedDate: previous?.completedDate || null,
    createdDate: previous?.createdDate || dateKey()
  };

  if (editingId) {
    tasks = tasks.map(item => item.id === editingId ? task : item);
    notify("Your chore has been updated.");
  } else {
    tasks.push(task);
    notify("New chore added successfully.");
  }

  persistTasks();
  closeModal();
  renderAll();
}

function toggleTask(id, checked) {
  const task = tasks.find(item => item.id === id);
  if (!task) return;

  task.done = checked;
  task.completedDate = checked ? dateKey() : null;
  persistTasks();
  renderAll();
  notify(checked ? "Lovely work! Chore completed." : "Chore moved back to your list.");
}

function deleteTask(id) {
  const task = tasks.find(item => item.id === id);
  if (!task) return;
  if (!confirm(`Delete "${task.name}" from your chores?`)) return;

  tasks = tasks.filter(item => item.id !== id);
  persistTasks();
  renderAll();
  notify("Chore deleted.");
}

function addShoppingItem(event) {
  event.preventDefault();
  const input = $("#shoppingInput");
  const name = input.value.trim();
  if (!name) return;

  shopping.push({ id: makeId(), name, bought: false });
  save(STORE.shopping, shopping);
  input.value = "";
  renderShopping();
  notify("Item added to your shopping list.");
}

function handleClicks(event) {
  const target = event.target.closest("button");
  if (!target) return;

  if (target.dataset.go) {
    goTo(target.dataset.go);
    return;
  }

  if (target.dataset.category) {
    currentCategory = target.dataset.category;
    currentFilter = "all";
    $("#categoryFilter").value = currentCategory;
    $$(".filter-btn").forEach(btn =>
      btn.classList.toggle("active", btn.dataset.filter === "all"));
    goTo("chores");
    renderFullTasks();
    return;
  }

  if (target.dataset.day !== undefined) {
    selectedDay = Number(target.dataset.day);
    renderPlanner();
    return;
  }

  if (target.dataset.edit) {
    const task = tasks.find(item => item.id === target.dataset.edit);
    if (task) openModal(task);
    return;
  }

  if (target.dataset.delete) {
    deleteTask(target.dataset.delete);
    return;
  }

  if (target.dataset.shopDelete) {
    const item = shopping.find(entry => entry.id === target.dataset.shopDelete);
    if (!item) return;
    if (!confirm(`Remove "${item.name}" from your shopping list?`)) return;
    shopping = shopping.filter(entry => entry.id !== item.id);
    save(STORE.shopping, shopping);
    renderShopping();
    notify("Shopping item removed.");
  }
}

function handleChanges(event) {
  const target = event.target;

  if (target.matches("[data-toggle]")) {
    toggleTask(target.dataset.toggle, target.checked);
    return;
  }

  if (target.matches("[data-shop-toggle]")) {
    const item = shopping.find(entry => entry.id === target.dataset.shopToggle);
    if (!item) return;
    item.bought = target.checked;
    save(STORE.shopping, shopping);
    renderShopping();
    return;
  }

  if (target.id === "categoryFilter") {
    currentCategory = target.value;
    renderFullTasks();
  }
}

function addDefaultChores() {
  const existingNames = new Set(tasks.map(task => task.name.toLowerCase()));
  const additions = DEFAULT_TASKS
    .filter(task => !existingNames.has(task.name.toLowerCase()))
    .map(task => ({
      ...task,
      id: makeId(),
      notes: "",
      done: false,
      completedDate: null,
      createdDate: dateKey()
    }));

  tasks.push(...additions);
  persistTasks();
  renderAll();
  notify(`${additions.length} default chore${additions.length === 1 ? "" : "s"} restored.`);
}

function init() {
  updateHeader();
  applySettings();
  renderAll();

  $$(".nav-link").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      goTo(link.dataset.page);
    });
  });

  window.addEventListener("hashchange", navigateFromHash);

  $("#menuToggle").addEventListener("click", () => {
    $("#sidebar").classList.toggle("open");
  });

  $("#quickAdd").addEventListener("click", () => openModal());
  $("#choresAdd").addEventListener("click", () => openModal());
  $("#addFromSidebar").addEventListener("click", () => openModal());
  $("#emptyAdd").addEventListener("click", () => openModal());
  $("#plannerAdd").addEventListener("click", () => openModal(null, "Cleaning", selectedDay));
  $("#startChores").addEventListener("click", () => goTo("chores"));

  $("#closeModal").addEventListener("click", closeModal);
  $("#cancelModal").addEventListener("click", closeModal);
  $("#taskForm").addEventListener("submit", addOrUpdateTask);

  $("#taskModal").addEventListener("click", event => {
    if (event.target === $("#taskModal")) closeModal();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeModal();
  });

  $$(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter;
      $$(".filter-btn").forEach(btn =>
        btn.classList.toggle("active", btn === button));
      renderFullTasks();
    });
  });

  $("#categoryFilter").addEventListener("change", event => {
    currentCategory = event.target.value;
    renderFullTasks();
  });

  $("#clearCompleted").addEventListener("click", () => {
    const count = tasks.filter(task => task.done).length;
    if (!count) return notify("There are no completed chores to clear.");
    if (!confirm(`Remove ${count} completed chore(s)?`)) return;
    tasks = tasks.filter(task => !task.done);
    persistTasks();
    renderAll();
    notify("Completed chores cleared.");
  });

  $("#shoppingForm").addEventListener("submit", addShoppingItem);

  $("#clearBought").addEventListener("click", () => {
    const count = shopping.filter(item => item.bought).length;
    if (!count) return notify("No purchased items to clear.");
    shopping = shopping.filter(item => !item.bought);
    save(STORE.shopping, shopping);
    renderShopping();
    notify("Purchased items cleared.");
  });

  $("#themeToggle").addEventListener("click", toggleTheme);
  $("#settingsTheme").addEventListener("click", toggleTheme);

  $("#saveName").addEventListener("click", () => {
    settings.name = $("#nameSetting").value.trim() || "Home Manager";
    save(STORE.settings, settings);
    applySettings();
    notify("Your display name has been saved.");
  });

  $("#restoreDefaults").addEventListener("click", () => {
    if (!confirm("Add any missing default chores to your list? Your existing tasks will stay.")) return;
    addDefaultChores();
  });

  $("#resetAll").addEventListener("click", () => {
    if (!confirm("Reset all chores, shopping items and preferences? This cannot be undone.")) return;
    tasks = [];
    shopping = [];
    settings = { dark: false, name: "Home Manager" };
    persistTasks();
    save(STORE.shopping, shopping);
    save(STORE.settings, settings);
    applySettings();
    renderAll();
    goTo("dashboard");
    notify("HomeEase has been reset.");
  });

  document.addEventListener("click", event => {
    if (event.target.closest("#sidebar")) return;
    if (event.target.closest("#menuToggle")) return;
    $("#sidebar").classList.remove("open");
  });

  document.addEventListener("click", handleClicks);
  document.addEventListener("change", handleChanges);

  navigateFromHash();
}

function toggleTheme() {
  settings.dark = !settings.dark;
  save(STORE.settings, settings);
  applySettings();
}

init();
