/**
 * Schedule a function to run on an interval similar to setInterval.
 *
 * Unlike setInterval this will assume you want the function to be called
 * at the top of the interval. For example if at 2:29:23 you schedule a
 * function to run every 60 seconds then the function will first be called
 * 37 seconds later at 2:30:00 and then every 60 seconds after that.
 *
 * This is especially useful in cases where timing needs to be more precise
 * and is more effecient than defensively running the function every second
 * or 60 seconds to avoid missing the time window.
 */
export default function scheduleInterval(fn, time) {
  let timeout;
  let interval;

  timeout = setTimeout(() => {
    timeout = null;

    fn();

    interval = setInterval(fn, time);
  }, time - (Date.now() % time));

  return () => {
    timeout && clearTimeout(timeout);
    interval && clearInterval(interval);
  };
}
