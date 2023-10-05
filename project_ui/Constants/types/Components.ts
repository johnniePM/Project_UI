import * as React  from 'react';


export interface IContainerProps {
  onPress?: () => any;
  children?:React.ReactNode;
  window?:{height:number, width:number}
}