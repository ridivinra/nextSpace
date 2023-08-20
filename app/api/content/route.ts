const posts = [
    {
      title: "10 Tips for Effective Time Management",
      slug: "10-tips-for-effective-time-management",
      content: "Managing your time effectively is crucial for productivity. Start by setting clear goals and prioritizing tasks. Break down your day into focused work intervals using techniques like the Pomodoro Technique. Minimize multitasking to maintain your concentration, and don't forget to schedule regular breaks to recharge. Embrace technology with tools like task management apps and calendar reminders. Learn to say no to tasks that don't align with your priorities. Delegate tasks when possible, and maintain a clutter-free workspace. Reflect on your achievements and adjust your strategies as needed."
    },
    {
      title: "Exploring Remote Work: Pros and Cons",
      slug: "exploring-remote-work-pros-and-cons",
      content: "Remote work has gained popularity, offering benefits like flexibility and reduced commute stress. It allows access to a broader talent pool and can lead to increased employee satisfaction. However, challenges include feelings of isolation and difficulties in communication. Remote work demands self-discipline and effective time management. Some roles may not be suitable for remote setups. Employers need to establish clear guidelines and provide the right tools for remote collaboration. Overall, finding the right balance between remote and in-person work is essential."
    },
    {
      title: "The Art of Creative Writing: Unleash Your Imagination",
      slug: "the-art-of-creative-writing-unleash-your-imagination",
      content: "Creative writing is a form of self-expression that allows you to explore the depths of your imagination. Start by finding inspiration from various sources like books, nature, and personal experiences. Develop relatable characters with distinct personalities and motivations. Craft engaging plots with compelling conflicts and resolutions. Show, don't tell, by using descriptive language to evoke emotions and sensory experiences. Edit and revise your work to refine your writing style. Remember that creativity takes time to flourish, so be patient with yourself as you embark on this literary journey."
    },
    // Add more mock blog posts here
  ];
  
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
    const session = await getServerSession();
    return NextResponse.json(posts);
}