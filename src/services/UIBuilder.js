import { selectElement } from '../utils/domUtils.js';

export class UIBuilder {
  async loadComponent(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to load component: ${url}`);
    return await response.text();
  }

  async buildUI() {
    const app = document.getElementById('app');
    if (!app) throw new Error('App container not found');

    const sidebar = await this.loadComponent('./src/components/sidebar.html');
    const header = await this.loadComponent('./src/components/header.html');
    const monitor = await this.loadComponent('./src/components/monitor.html');

    app.innerHTML = `
      <div class="flex flex-row">
        ${sidebar}
        <div class="w-full flex flex-col bg-gray-200">
          ${header}
          <div class="flex flex-col items-center w-full relative">
            ${monitor}
          </div>
        </div>
      </div>
    `;
  }

  getElements() {
    return {
      monitor: selectElement('#monitor'),
      screen: selectElement('#monitor-screen'),
      gridContainer: selectElement('#grid-container'),
      resizer: selectElement('#resizer'),
      gridElementSidebar: selectElement('#gridElement'),
      undoBtn: selectElement('#undoBtn'),
      redoBtn: selectElement('#redoBtn'),
    };
  }
}