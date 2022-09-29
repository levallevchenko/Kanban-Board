type MixProps<P> = P & {className?: string};
export interface ClassNameInterface<P = {}> extends React.FC<MixProps<P>> {};
