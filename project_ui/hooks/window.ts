export function getWindowDimensions():{height:number, width:number} {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }