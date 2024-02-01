import tkinter as tk
import time
import matplotlib.pyplot as plt
from datetime import datetime, timedelta

class TimeTrackerApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Time Tracker")

        self.start_time = None
        self.total_time = 0
        self.daily_times = []

        self.label = tk.Label(root, text="On-Screen Time: 0 seconds", font=("Helvetica", 16))
        self.label.pack(pady=20)

        self.start_button = tk.Button(root, text="Start", command=self.start_timer)
        self.start_button.pack(side=tk.LEFT, padx=10)

        self.stop_button = tk.Button(root, text="Stop", command=self.stop_timer)
        self.stop_button.pack(side=tk.RIGHT, padx=10)

        self.view_weekly_button = tk.Button(root, text="View Weekly Summary", command=self.view_weekly_summary)
        self.view_weekly_button.pack(pady=10)

    def start_timer(self):
        if self.start_time is None:
            self.start_time = time.time()
            self.update_time()

    def stop_timer(self):
        if self.start_time is not None:
            elapsed_time = time.time() - self.start_time
            self.total_time += elapsed_time
            self.daily_times.append(elapsed_time)
            self.start_time = None
            self.update_time()

    def update_time(self):
        if self.start_time is not None:
            elapsed_time = time.time() - self.start_time
            current_time = self.total_time + elapsed_time
        else:
            current_time = self.total_time

        self.label.config(text="On-Screen Time: {:.2f} seconds".format(current_time))
        self.root.after(1000, self.update_time)  # Update every 1000 milliseconds (1 second)

    def view_weekly_summary(self):
        self.plot_weekly_summary()

    def plot_weekly_summary(self):
        week_days = [datetime.now().date() - timedelta(days=i) for i in range(7)]
        week_days.reverse()

        daily_seconds = [sum(self.daily_times[i:i+1]) if i < len(self.daily_times) else 0 for i in range(7)]
        daily_hours = [seconds / 3600 for seconds in daily_seconds]

        plt.bar(week_days, daily_hours, color='skyblue')
        plt.xlabel('Date')
        plt.ylabel('On-Screen Time (hours)')
        plt.title('Weekly Summary')
        plt.xticks(rotation=45, ha='right')
        plt.tight_layout()
        plt.show()

if __name__ == "__main__":
    root = tk.Tk()
    app = TimeTrackerApp(root)
    root.mainloop()
