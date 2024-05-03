import { Graph } from "@maxgraph/core";
import { MyCustomCellRenderer } from "./my-custom-cell-renderer";

export class MyCustomGraph extends Graph {
	override createCellRenderer() {
		return new MyCustomCellRenderer();
	}
}