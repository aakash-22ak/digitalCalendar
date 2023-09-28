export default function CalendarTwo() {
  return (
    <main className="flex  gap-10">
      <div className="w-[600px] ">
        <div className="flex bg-red-600 justify-between px-10 py-8 rounded-t-lg ">
          <p className="text-2xl text-white font-bold">Year</p>
          <p className="text-4xl text-white font-bold">...</p>
          <p className="text-2xl text-white font-bold">Month</p>
        </div>
        <div className="bg-rose-600 rounded-b-lg h-[500px] ">
          <table>
            <tr className="flex px-8 py-5 text-white w-[600px] justify-between ">
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
            <tr className="flex px-8 py-5 text-white  justify-between ">
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
            </tr>
            <tr className="flex px-8 py-5 text-white  justify-between">
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
            </tr>
            <tr className="flex px-8 py-5 text-white  justify-between">
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <td>19</td>
              <td>20</td>
              <td>21</td>
            </tr>
            <tr className="flex px-8 py-5 text-white  justify-between">
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
              <td>28</td>
            </tr>
            <tr className="flex px-8 py-5 text-white gap-16 ">
              <td>29</td>
              <td>30</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="w-[600px] rounded-lg">
        <div className="bg-red-600 py-10 rounded-t-lg">
          <h1 className="text-3xl font-bold text-white px-8">Events  </h1>
        </div>
        <div className="h-[485px] rounded-b-lg bg-slate-200">

        </div>
        
      </div>
    </main>
  );
}
