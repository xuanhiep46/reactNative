type RootStackParamList = {
    home: undefined;
    "review-detail": { id: number; title: string; star: number } | undefined;
    // Feed: { sort: 'latest' | 'top' } | undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}

declare module "*.png"
