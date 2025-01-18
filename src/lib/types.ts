export interface LeaderboardData {
  name: string;
  country_code: string;
  invite_code: string;
  message: string;
  count: number;
  started_at: string;
  invited_by: string;
  student_imgs: string[];
}

export interface SchoolData {
  name: string;
  location: string;
  school_img_id: number;
  school_img_url: string;
  ht_img_id: number;
  ht_name: string;
  ht_img_url: string;
  ht_quote: string;
  year_established: string;
  total_students: string;
  total_teachers: string;
  total_applicants: string;
}
