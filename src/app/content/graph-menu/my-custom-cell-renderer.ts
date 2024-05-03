import { CellOverlay, CellRenderer, CellState, Client, EventObject, InternalEvent, InternalMouseEvent, Shape } from "@maxgraph/core";

export class MyCustomCellRenderer extends CellRenderer {
	override installCellOverlayListeners(state: CellState, overlay: CellOverlay, shape: Shape) {
		
		//@ts-ignore
		super.installCellOverlayListeners.apply(this, arguments);
		let graph = state.view.graph;
		InternalEvent.addGestureListeners(shape.node, function (evt) {
			graph.fireMouseEvent(InternalEvent.MOUSE_DOWN, new InternalMouseEvent(evt, state));
		}, function (evt) {
			graph.fireMouseEvent(InternalEvent.MOUSE_MOVE, new InternalMouseEvent(evt, state));
		}, function (evt) { });
		if (!Client.IS_TOUCH) {
			InternalEvent.addListener(shape.node, 'mouseup', function (evt: MouseEvent) {
				overlay.fireEvent(new EventObject(InternalEvent.CLICK, 'event', evt, 'cell', state.cell));
			});
		}
	}
}