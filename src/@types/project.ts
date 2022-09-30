type MixProps<P> = P & { className?: string };
export interface ClassNameI<P = {}> extends React.FC<MixProps<P>> { };
