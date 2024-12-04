export function generateAngularComponent(svgContent: string, componentName: string): string {
  const updatedSvgContent = svgContent.replace(
    /<svg([^>]*)>/,
    `<svg$1 [attr.width]="size.width" [attr.height]="size.height">`
  );

  return `
/**
 * -------------------------------------------------------------------------
 * This Angular standalone component was generated by svgl.app
 * 🧩 A beautiful library with SVG logos
 * -------------------------------------------------------------------------
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg-${componentName}',
  standalone: true,
  template: \`
    ${updatedSvgContent.trim()}
  \`,
})
export class ${componentName}Component {
  @Input({ required: true }) size: { width: number; height: number };
}
`;
}
