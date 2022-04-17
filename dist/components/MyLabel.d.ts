/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    * Mensaje que se muestra en la etiqueta
    */
    label: string;
    /**
     * Tamaño normal
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Convierte el texto en mayuscula
     */
    allCaps: boolean;
    /**
     * Color del texto
     */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
     * Color personalizado de la fuente
     */
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element;
