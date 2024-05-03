import { Graph, MaxPopupMenu, PopupMenuHandler } from "@maxgraph/core";

export class MyCustomPopupMenuHandler extends PopupMenuHandler {
	// Configures automatic expand on mouseover
	override autoExpand = true;
	constructor(graph: Graph) {
		super(graph);

		// Installs context menu
		this.factoryMethod = function (menu, cell, evt) {
			//const menu = menu_ as unknown as MaxPopupMenu
			menu.addItem('Item 1', null, function () {
				alert('Item 1');
			});
			menu.addItem('Item 2', null, function () {
				alert('Item 2');
			});
			menu.addSeparator();
			let submenu1 = menu.addItem('Submenu 1', null, () => { });
			menu.addItem('Subitem 1', null, function () {
				alert('Subitem 1');
			}, submenu1);
			menu.addItem('Subitem 1', null, function () {
				alert('Subitem 2');
			}, submenu1);
		};
	}
}