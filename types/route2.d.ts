type RootStackParamList = {
    home: undefined; //kh dùng thì để là undefined
    "review-detail": undefined; //{ userId: string };
    //Feed: { sort: 'latest' | 'top' } | undefined;
  };

  declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
  }