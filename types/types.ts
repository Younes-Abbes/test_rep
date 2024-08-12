export type Course = {
  id: number;
  image: string;
  label: string;
  price: number;
  description: string;
  rating: number;
  students: number;
  colors: string;
};
export type FeatureCourse = {
  id: number;
  image: string;
  label: string;
  price_init: number;
  price: number;
  description: string;
  instructor: string;
  instructorPic: string;
  rating: number;
  raters: number;
  students: number;
  level: string;
  hours: number;
};

export type RecentCourse = {
  label: string;
  price: string;
  title: string;
  pic: string;
  stars: string;
  students: string;
  colors: string;
  date: string;
};
