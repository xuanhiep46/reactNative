type RootStackParamList = {
    home: undefined; 
    "review-detail": {id: number; title: string; star: number} | undefined; //không muốn nó truyền data thì thêm một cái 'hoặc undefine'
    //Feed: { sort: 'latest' | 'top' } | undefined;
  };

  declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
  }