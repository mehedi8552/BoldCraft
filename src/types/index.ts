import { PortfolioItem } from "../data/portfolioLists";

export interface IPageHeaderProps {
  title: string;
  path: string;
  breadcrumbPath: string;
}

export interface ICounterComponentProps {
  className?: string;
  valueOne: number;
  valueOneClassName?: string;
  valueTwo: number;
  valueTwoClassName?: string;
  valueThree: number;
  valueThreeClassName?: string;
  titleOne: string;
  titleOneClassName?: string;
  titleTwo: string;
  titleTwoClassName?: string;
  titleThree: string;
  titleThreeClassName?: string;
  descriptionOne: string;
  descriptionOneClassName?: string;
  descriptionTwo: string;
  descriptionTwoClassName?: string;
  descriptionThree: string;
  descriptionThreeClassName?: string;
}

export interface ISliderWithLeftRightArrowProps {
  portfolioItems: PortfolioItem[];
}
